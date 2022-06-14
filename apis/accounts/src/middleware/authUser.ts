import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const ANDYFX_ACCESS_TOKEN_SECRET = process.env.ANDYFX_ACCESS_TOKEN_SECRET as string;

/**
 * sets `req.userId`
 *
 * Only next if valid signed cookie or valid Bearer token.
 */
export default async function authUser(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.method === "OPTIONS") {
      return next();
    }
    if (req.signedCookies.id) {
      // already verified by cookieParser (with secret).
      // (will be false or undefined if sent but didnt pass verification)
      req.userId = req.signedCookies.id;
      //console.log("auth with signed cookie, id:", req.userId);
      return next();
    }

    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized." });
    }

    const [type, idToken] = authorization.split(" ");
    if (!type || !idToken) {
      return res.status(401).json({ message: "Unauthorized." });
    }

    if (type === "Bearer") {
      //Bearer token is stateless
      const tokenPayload = jwt.verify(idToken, ANDYFX_ACCESS_TOKEN_SECRET) as jwt.JwtPayload;
      req.userId = tokenPayload.id;
      //console.log("auth with Bearer token, id:", req.userId);
      return next();
    }

    //return res.status(401).redirect("/login");
    return res.status(401).json({ message: "Unauthorized." });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized." });
  }
}
