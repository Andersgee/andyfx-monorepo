import mongoose from "mongoose";

export type Target = {
  _id: string;
  creatorId: string;
  /** represents a number. If the actual number is needed: `n = hashids.decode(id)-4000000` */
  shortId: string;
  createdAt: number;
  modifiedAt: number;
  svg: string;
  width: number;
  height: number;
  title: string;
  description: string;
  placeholder: string;
  colors: string[];
};

const TargetSchema = new mongoose.Schema<Target>({
  creatorId: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  createdAt: { type: Number, required: true },
  modifiedAt: { type: Number, required: true },
  svg: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  placeholder: { type: String },
  colors: [String],
});

export const TargetModel = mongoose.model<Target>("Target", TargetSchema);
