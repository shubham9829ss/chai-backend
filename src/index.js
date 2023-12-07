import dotenv from "dotenv";
import connectDB from "./db/index.js"; // single export per module
import { app } from "./app.js"; // multiple export per module
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!", error);
  });
