import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CidadesService {
  static async listarCidades() {
    try {
      let cidades = await prisma.cIDADE.findMany();
      // Remover quebras de linha das URLs das imagens
      cidades = cidades.map(cidade => ({
        ...cidade,
        img_cidade: cidade.img_cidade.replace(/\n/g, ''),
        descricao: cidade.descricao.replace(/\n/g, ''),
      }));
      console.log("Cidades encontradas:", cidades); // depuração
      return cidades;
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
      throw error;
    }
  };
  
  static async buscarCidadePorId(idCidade) {
    try {
      const cidade = await prisma.cIDADE.findUnique({
        where: { id_cidade: parseInt(idCidade) },
      });

      if (cidade) {
        // Remover quebras de linha da URL da imagem
        cidade.img_cidade = cidade.img_cidade.replace(/\n/g, '');
        cidade.descricao = cidade.descricao.replace(/\n/g, '');

      }

      return cidade;
    } catch (error) {
      console.error("Erro ao buscar cidade por ID:", error);
      throw error;
    }
  }

}

export default CidadesService;
