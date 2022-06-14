import { Request, Response } from "express";
import { PostModel } from "#models/post";
import type { Post } from "#models/post";

export async function readWall(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const posts = await PostModel.find({ recieverId: id }).populate("replies");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function readIds(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const posts = await PostModel.find({ recieverId: id }).lean();
    const postIds = posts.map((post) => post._id);
    return res.status(200).json(postIds);
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function read(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const post = await PostModel.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Not found." });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const userId = req.userId;

    const post: Post = { ...req.body, creatorId: userId };
    const doc = new PostModel(post);
    await doc.save();
    return res.status(201).json({ message: "Created." });
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    const post = await PostModel.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Not found." });
    }

    if (userId !== post.creatorId) {
      return res.status(401).json({ message: "Cant update someone elses post." });
    }

    post.modifiedAt = req.body.modifiedAt;
    post.text = req.body.text;

    await post.save();

    return res.status(200).json({ message: "Updated." });
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    const post = await PostModel.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Not found." });
    }

    if (userId !== post.creatorId) {
      return res.status(401).json({ message: "Cant remove someone elses post." });
    }

    await post.remove();

    res.status(200).json({ message: "removed." });
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}
