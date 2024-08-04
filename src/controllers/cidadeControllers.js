import CidadesService from "../service/cidadesService.js";

class CidadesController {
    static async listarCidades(req, res) {
      try {
        const cidades = await CidadesService.listarCidades();
        console.log("Dados retornados:", cidades); // Log para depuração
        res.status(201).json(cidades);
      } catch (erro) {
        res
          .status(500)
          .json({ message: `${erro.message} - Falha ao buscar Cidades` });
      }
    }
    static async buscarCidadePorId(req, res) {
      const { id } = req.params;
      try {
        const cidade = await CidadesService.buscarCidadePorId(id);
  
        if (cidade) {
          res.status(201).json(cidade);
        } else {
          res.status(404).json({ message: `Cidade com ID '${id}' não encontrada.` });
        }
      } catch (erro) {
        res
          .status(500)
          .json({ message: `${erro.message} - Falha ao buscar Cidade por ID` });
      }
    }
  }
  
  export default CidadesController;