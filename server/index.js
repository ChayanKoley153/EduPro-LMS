import express from "express";
import dontenv from "dotenv";

dontenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(()=>{
    console.log(`Server is running on port ${PORT}`);
})
