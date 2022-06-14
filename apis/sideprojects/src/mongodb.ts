import mongoose from "mongoose";

export async function mongooseConnection(mongodbUrl?: string) {
  if (!mongodbUrl) throw new Error("no mongodb url");
  console.log(`mongoose connecting to mongodb: ${mongodbUrl} ...`);

  mongoose.connection.once("open", () => console.log("... mongoose connected to mongodb"));
  mongoose.connection.on("error", (err) => console.log(`... mongoose connection error`, err));
  await mongoose.connect(mongodbUrl);
}
