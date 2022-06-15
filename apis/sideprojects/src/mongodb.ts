import mongoose from "mongoose";

export async function mongooseConnection(mongodbUrl?: string) {
  if (!mongodbUrl) throw new Error("no mongodb url");
  console.log(`mongoose waiting for connection to: ${mongodbUrl} ...`);

  mongoose.connection.once("open", () => console.log(`... mongoose connected to: ${mongodbUrl}`));
  mongoose.connection.on("error", (err) => console.log(`... ERROR connecting to mongodb:`, err));
  await mongoose.connect(mongodbUrl);
}
