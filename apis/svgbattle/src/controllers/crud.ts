import { Request, Response } from "express";
import mongoose from "mongoose";

const notValidId = (id: string) => !mongoose.isValidObjectId(id);
// generic Create, Read, Update, Delete of any mongoose.Model type
// put anything more specific in correponsing controller.

/**
 * create a new document in Model from req.body
 */
export async function create(Model: mongoose.Model<any>, req: Request, res: Response) {
  try {
    const doc = new Model(req.body);
    await doc.save();
    return res.status(201).json("Created.");
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

/**
 * read Model[req.params.id]
 */
export async function read(Model: mongoose.Model<any>, req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (notValidId(id)) return res.status(400).json({ message: "Invalid id." });

    const doc = await Model.findById(id);
    if (!doc) return res.status(404).json({ message: "Not found." });

    return res.status(200).json(doc);
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

/**
 * update Model[req.params.id] with req.body
 */
export async function update(Model: mongoose.Model<any>, req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (notValidId(id)) return res.status(400).json({ message: "Invalid id." });

    const options = { new: true }; //get updated document instead of old
    const doc = await Model.findByIdAndUpdate(id, req.body, options);
    if (!doc) return res.status(404).json({ message: "Not found." });

    return res.status(200).json("Updated.");
  } catch (error) {
    return res.status(409).json({ message: "Something went wrong." });
  }
}

/**
 * delete Model[req.params.id]
 */
export async function remove(Model: mongoose.Model<any>, req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (notValidId(id)) return res.status(400).json({ message: "Invalid id." });

    const doc = await Model.findById(id);
    if (!doc) return res.status(404).json({ message: "Not found." });

    await doc.remove();
    return res.status(200).json({ message: "Deleted." });
  } catch (error) {
    res.status(409).json({ message: "Something went wrong." });
  }
}
