import mongoose from "mongoose";

export type User = {
  _id: string;
  name: string;
  email: string;
  verified: boolean;
  password?: string;
  googleId?: string;
};

const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  verified: { type: Boolean, default: false },
  password: { type: String },
  googleId: { type: String },
});

export const UserModel = mongoose.model<User>("User", UserSchema);
