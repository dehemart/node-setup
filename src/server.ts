import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const serverPort = process.env.PORT || 3000;

app.listen( serverPort, () => {
  console.log( `Server running on ${serverPort} port...` );
} );
