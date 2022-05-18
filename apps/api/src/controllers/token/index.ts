import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenModel } from "#src/models/token";

const ANDYFX_ACCESS_TOKEN_SECRET = process.env.ANDYFX_ACCESS_TOKEN_SECRET as string;
const ANDYFX_REFRESH_TOKEN_SECRET = process.env.ANDYFX_REFRESH_TOKEN_SECRET as string;

const ACCESS_TOKEN_EXPIRES_IN_SECONDS = 60 * 30; // 30 minutes

function newAccessToken(id: string) {
  return jwt.sign({ id }, ANDYFX_ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN_SECONDS });
}

function newRefreshToken(id: string) {
  return jwt.sign({ id }, ANDYFX_REFRESH_TOKEN_SECRET); //without expiry
}

/**
 * Generate a new (or get existing) refreshToken.
 */
export async function generateRefreshToken(req: Request, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    const existingToken = await TokenModel.findOne({ userId });
    if (existingToken) {
      return res.status(200).json({ refreshToken: existingToken.refreshToken });
    }

    const refreshToken = newRefreshToken(userId);
    await TokenModel.create({ userId, refreshToken });
    return res.status(201).json({ refreshToken: refreshToken });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function revokeRefreshToken(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const token = await TokenModel.findOne({ userId });
    if (!token) {
      return res.status(200).json({ message: "Already revoked (or never existed)" });
    }

    await token.remove();
    return res.status(200).json({ message: "Revoked." });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

/**
 * returns accessToken, if valid req.body.refreshToken
 *
 * should only requires valid refreshToken in req.body. So dont authUser middleware this.
 */
export async function generateAccessToken(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: "Need refreshToken in body." });
    }

    const token = await TokenModel.findOne({ refreshToken });
    if (!token) {
      return res.status(401).json({ message: "Bad refreshToken." });
    }
    const accessToken = newAccessToken(token.userId);
    return res.status(200).json({ accessToken: accessToken, expires_in_seconds: ACCESS_TOKEN_EXPIRES_IN_SECONDS });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}
