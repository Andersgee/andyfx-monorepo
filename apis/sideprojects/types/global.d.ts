import { Request } from "express";
import { User } from "#models/user";
import mongoose from "mongoose";

declare global {
  namespace Express {
    export interface Request {
      userId?: string;
    }
  }

  /**
   * Shorthand for the type that is returned by Model.findOne() et al.
   */
  type Doc<T> = mongoose.Document<unknown, any, T> &
    T & {
      _id: mongoose.Types.ObjectId;
    };
}
