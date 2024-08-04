import AtrativosService from "../service/atrativosService.js";

class AtrativosController {
  static async listarAtrativos(req, res) {
    try {
      const atrativos = await AtrativosService.listarAtrativos();
      console.log("Dados retornados:", atrativos); // Log para depuração
      res.status(201).json(atrativos);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao buscar Atrativos` });
    }
  }

  static async listarAtrativoPorId(req, res) {
    const { id } = req.params;
    try {
      const atrativo = await AtrativosService.listarAtrativoPorId(id);

      if (atrativo) {
        console.log("Atrativo retornado por ID:", atrativo); //depuração
        res.status(200).json(atrativo);
      } else {
        res
          .status(404)
          .json({ message: `Atrativo com ID '${id}' não encontrado.` });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao buscar Atrativo por ID` });
    }
  }
}

export default AtrativosController;
