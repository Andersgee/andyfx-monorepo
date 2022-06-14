import { Request, Response } from "express";
import { TargetModel } from "#models/target";
import type { Target } from "#models/target";
import Hashids from "hashids";

const HASHIDS_OFFSET = 4000000; //start on something large so that first id will be 6 letters
const HASHIDS_SALT = "andyfx";
const hashids = new Hashids(HASHIDS_SALT);

export async function readAll(req: Request, res: Response) {
  try {
    const targets = await TargetModel.find().lean();

    return res.status(200).json(targets);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function read(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const target = await TargetModel.findById(id).lean();
    if (!target) return res.status(404).json({ message: "Not found." });

    return res.status(200).json(target);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function readShortId(req: Request, res: Response) {
  const { shortId } = req.params;
  try {
    const target = await TargetModel.findOne({ shortId }).lean();
    if (!target) return res.status(404).json({ message: "Not found." });

    return res.status(200).json(target);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function removeAll(req: Request, res: Response) {
  try {
    const deleteResult = await TargetModel.deleteMany({}); //

    return res.status(200).json(deleteResult);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const n = await TargetModel.find().estimatedDocumentCount();
    const shortId = hashids.encode(n + HASHIDS_OFFSET);

    const target: Target = { ...req.body, shortId, creatorId: userId };
    const doc = new TargetModel(target);
    await doc.save();

    return res.status(200).json(target);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const userId = req.userId;
    const { id } = req.params;

    const target = await TargetModel.findById(id);
    if (!target) return res.status(404).json({ message: "Not found." });

    if (target.creatorId !== userId) {
      return res.status(401).json({ message: "Cant update someone elses." });
    }

    const update: Target = { ...req.body, modifiedAt: Date.now() };
    const updatedTarget = await target.update(update, { new: true });
    //const updatedTarget = await TargetModel.findByIdAndUpdate(id, update, { new: true });

    return res.status(200).json(updatedTarget);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
}
