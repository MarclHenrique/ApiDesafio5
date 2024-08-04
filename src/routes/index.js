import express from "express";
import cidade from "./cidadeRoutes.js";
import regiao from "./regiaoRoutes.js";
import atrativos from "./atrativosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Meu Maranhão"));

  app.use(express.json(), cidade, regiao, atrativos);
};

export default routes;
