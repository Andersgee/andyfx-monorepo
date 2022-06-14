import mongoose from "mongoose";
import type { Reply } from "./reply";

export type Post = {
  _id: string;
  creatorId: string;
  recieverId: string;
  createdAt: number;
  modifiedAt: number;
  text: string;
  /** list of `Reply` ids, replaced by actual documents after `post.popolate("replies")` */
  replies: string[];
};

export type PostPopulated = Omit<Post, "replies"> & { replies: Reply[] };

//insert like so:
//const newReply = new ReplyModel(req.body)
//await newReplay.save()
//post.replies.push(newReply._id);
//
//when getting a Post, we can get replies (instead of their ids) via "populate":
//await post.pupulate("replies")

const PostSchema = new mongoose.Schema<Post>({
  creatorId: { type: String, required: true },
  recieverId: { type: String, required: true },
  createdAt: { type: Number, required: true },
  modifiedAt: { type: Number, required: true },
  text: { type: String, required: true },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reply" }],
});

export const PostModel = mongoose.model<Post>("Post", PostSchema);
