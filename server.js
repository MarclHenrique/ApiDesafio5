import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000; 
const HOST = process.env.HOST || 'localhost'; 

server.use(cors());
server.use(express.json());

routes(server);

server.listen(PORT, () => {
  console.log(`Service is running on http://${HOST}:${PORT}`);
});
