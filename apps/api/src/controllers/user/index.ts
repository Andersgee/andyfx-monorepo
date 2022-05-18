import { Request, Response } from "express";
import { UserModel } from "#models/user";

export async function readAll(req: Request, res: Response) {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function getMe(req: Request, res: Response) {
  try {
    const id = req.userId;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Not found." });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}

export async function updateMe(req: Request, res: Response) {
  try {
    const id = req.userId;
    //grab all allowed things to update
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

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (req.userId !== id) {
      return res.status(401).json({ message: "Cant update someone elses profile." });
    }
    //grab all allowed things to update
    const { name } = req.body;

    const user = await UserModel.findById(req.userId);

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
