import RegiaoService from "../service/regiaoService.js";

class RegiaoController {
  
  static async listarCidadesPorRegiao(req, res) {
    const { id } = req.params;
    try {
      const cidades = await RegiaoService.buscarCidadesPorRegiao(id);
      console.log("Cidades por região:", cidades); // Log para depuração
      res.status(201).json(cidades);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao buscar Cidades por Região` });
    }
  }
}

export default RegiaoController;