import { Request, Response } from "express";
import { UserModel } from "#models/user";
//import mongoose from "mongoose";

export async function readAll(req: Request, res: Response) {
  try {
    const allUsers = await UserModel.find().lean();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function readPublic(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).lean();

    if (!user) {
      return res.status(404).json({ message: "Not found." });
    }

    const userPublic = { _id: user._id, name: user.name, email: user.email };

    return res.status(200).json(userPublic);
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}

export async function readListPublic(req: Request, res: Response) {
  try {
    const ids: string[] = req.body.ids;
    const users = await UserModel.find({ _id: { $in: ids } }).lean();

    const usersPublic = users.map((user) => ({ _id: user._id, name: user.name, email: user.email }));

    return res.status(200).json(usersPublic);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function readMe(req: Request, res: Response) {
  try {
    const id = req.userId;
    const user = await UserModel.findById(id).lean();
    if (!user) {
      return res.status(404).json({ message: "Not found." });
    }
    //delete user.password //dont return the hashed password?
    return res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}

export async function updateMe(req: Request, res: Response) {
  try {
    const id = req.userId;

    //grab allowed things to update
    const { name } = req.body;

    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Not found." });
    }

    user.name = name;
    await user.save();

    res.status(200).json({ message: "Updated." });
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}

export async function removeMe(req: Request, res: Response) {
  try {
    const id = req.userId;

    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "Not found." });
    }

    await user.remove();

    res.status(200).json({ message: "removed." });
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}
