import { Request, Response, CookieOptions } from "express";
import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";
import { UserModel } from "#models/user";

const GOOGLE_CLIENTID = process.env.GOOGLE_CLIENTID as string;

// CookieOptions takes time in milliseconds but jwt.sign takes time in seconds
const EXPIRES_IN_SECONDS_DEV = 60 * 5; // 5 minutes
const EXPIRES_IN_SECONDS_PROD = 60 * 60 * 24 * 7; // 1 week

const client = new OAuth2Client(GOOGLE_CLIENTID);

const COOKIE_OPTIONS_DEV: CookieOptions = {
  domain: "localhost",
  maxAge: 1000 * EXPIRES_IN_SECONDS_DEV, //time in milliseconds
  httpOnly: true,
  signed: true,
  secure: false,
  sameSite: "lax",
};

const COOKIE_OPTIONS_PROD: CookieOptions = {
  domain: "andyfx.net",
  maxAge: 1000 * EXPIRES_IN_SECONDS_PROD, // 1 week
  httpOnly: true, //only in browser, not available from javascript
  signed: true, //signed with cookieParser secret
  secure: true, //https only
  sameSite: "lax",
};

const COOKIE_OPTIONS = process.env.NODE_ENV === "production" ? COOKIE_OPTIONS_PROD : COOKIE_OPTIONS_DEV;

/**
 * sign in with email, password
 *
 * set cookie
 * */
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ email: "No account" });
    }
    if (!user.password) {
      return res.status(400).json({ password: "No password" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(401).json({ password: "Incorrect" });
    }

    res.cookie("id", user.id, COOKIE_OPTIONS);
    return res.status(200).json({ id: user.id });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

/**
 * remove cookie
 */
export async function logout(req: Request, res: Response) {
  try {
    //note: clearCookie options must be same as when it was created. (except expires and maxAge which are ignored when clearing)
    res.clearCookie("id", COOKIE_OPTIONS);
    return res.status(200).json({ message: "Signed out." });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

/**
 * sign in (or sign up if new user) with google idToken
 *
 * set cookie
 */
export async function google(req: Request, res: Response) {
  try {
    const { idToken } = req.body;
    //const googleUser_unverified = jwt.decode(idToken);
    const ticket = await client.verifyIdToken({ idToken, audience: GOOGLE_CLIENTID });
    const googleUser = ticket.getPayload();
    if (!googleUser) {
      return res.status(401).json({ message: "Could not verify google idToken" });
    }

    const existingUser = await UserModel.findOne({ googleId: googleUser.sub });
    if (!existingUser) {
      const user = await UserModel.create({
        googleId: googleUser.sub,
        name: googleUser.name,
        email: googleUser.email,
        verified: true,
      });
      res.cookie("id", user.id, COOKIE_OPTIONS);
      return res.status(200).json({ id: user.id });
    }

    res.cookie("id", existingUser.id, COOKIE_OPTIONS);
    return res.status(200).json({ id: existingUser.id });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

/**
 * sign up
 *
 * set cookie
 */
export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ email: "Aleady exist" });
    }
    /*
    if (password !== confirmPassword) {
      return res.status(400).json({ confirmPassword: "Does not match" });
    }
    */

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.cookie("id", user.id, COOKIE_OPTIONS);
    return res.status(200).json({ id: user.id });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}
