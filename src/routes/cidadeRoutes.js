import express from "express";
import CidadesController from "../controllers/cidadeControllers.js";

const cidade  = express.Router();

cidade.get("/cidades",  CidadesController.listarCidades);
cidade.get("/cidades/:id", CidadesController.buscarCidadePorId);

export default cidade;