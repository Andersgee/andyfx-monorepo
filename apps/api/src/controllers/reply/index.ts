import { Request, Response } from "express";
import { ReplyModel } from "#models/reply";
import { PostModel } from "#models/post";
import type { Reply } from "#models/reply";

export async function read(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const reply = await ReplyModel.findById(id);

    if (!reply) {
      return res.status(404).json({ message: "Not found." });
    }

    return res.status(200).json(reply);
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const { postId } = req.params;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Not found." });
    }

    const newReply: Reply = { ...req.body, creatorId: userId };
    const reply = new ReplyModel(newReply);
    await reply.save();
    post.replies.push(reply._id);
    await post.save();

    return res.status(201).json(post);
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    const doc = await ReplyModel.findById(id);

    if (!doc) {
      return res.status(404).json({ message: "Not found." });
    }

    if (userId !== doc.creatorId) {
      return res.status(401).json({ message: "Cant update someone elses reply." });
    }

    doc.modifiedAt = req.body.modifiedAt;
    doc.text = req.body.text;

    await doc.save();

    return res.status(200).json({ message: "Updated." });
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    const doc = await ReplyModel.findById(id);

    if (!doc) {
      return res.status(404).json({ message: "Not found." });
    }

    if (userId !== doc.creatorId) {
      return res.status(401).json({ message: "Cant remove someone elses reply." });
    }

    await doc.remove();

    res.status(200).json({ message: "Removed." });
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}
