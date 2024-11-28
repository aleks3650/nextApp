import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbname: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("mongo is connected");
  } catch (error) {
    console.error(error);
  }
};
