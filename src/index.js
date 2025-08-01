 import dotenv from "dotenv";
 import connectDb from "./config/db.js";

dotenv.config({
    path: './env'
});

connectDb();
