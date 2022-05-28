import mongoose from "mongoose";

export interface Reply {
  _id: string;
  creatorId: string;
  recieverId: string;
  createdAt: number;
  modifiedAt: number;
  text: string;
}

const ReplySchema = new mongoose.Schema<Reply>({
  creatorId: { type: String, required: true },
  recieverId: { type: String, required: true },
  createdAt: { type: Number, required: true },
  modifiedAt: { type: Number, required: true },
  text: { type: String, required: true },
});

export const ReplyModel = mongoose.model<Reply>("Reply", ReplySchema);
