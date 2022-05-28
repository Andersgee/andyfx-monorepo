import mongoose from "mongoose";

export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  googleId?: string;
}

const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  googleId: { type: String },
});

export const UserModel = mongoose.model<User>("User", UserSchema);
