import mongoose from "mongoose";

export interface Token {
  /** Which userID is linked to this refresh token */
  userId: string;
  refreshToken: string;
}

const TokenSchema = new mongoose.Schema<Token>({
  userId: { type: String, required: true },
  refreshToken: { type: String, required: true },
});

export const TokenModel = mongoose.model<Token>("Token", TokenSchema);
