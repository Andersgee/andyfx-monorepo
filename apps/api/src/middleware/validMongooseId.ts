import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

/**
 * Only call `next()` if parameter `:id` is potentially a valid document id.
 */
export default async function validMongooseId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ message: "Invalid id." });
  } else {
    next();
  }
}
