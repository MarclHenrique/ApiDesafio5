import express from "express";
import AtrativosController from "../controllers/atrativosControllers.js";

const atrativos = express.Router();

atrativos.get("/atrativos", AtrativosController.listarAtrativos);
atrativos.get("/atrativos/:id", AtrativosController.listarAtrativoPorId);


export default atrativos;
