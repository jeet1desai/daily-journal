import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connection success");
    });
    connection.on("error", (err) => {
      console.log("Connection error" + err);
      process.exit();
    });
  } catch (err) {
    console.error("Something went wrong");
    console.log(err);
  }
}
