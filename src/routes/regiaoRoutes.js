import express from "express";
import RegiaoController from "../controllers/regiaoController.js";

const regiao = express.Router();

regiao.get("/regiao/:id", RegiaoController.listarCidadesPorRegiao);

export default regiao;
