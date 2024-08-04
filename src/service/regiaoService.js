import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class RegiaoService {
  
  static async buscarCidadesPorRegiao(idRegiao) {
    try {
      // Encontrar a região pelo ID
      const regioes = await prisma.rEGIAO.findMany({
        where: { id_regiao: parseInt(idRegiao, 10) },
        include: {
          DESTINO: {
            include: {
              CIDADE: true
            }
          }
        }
      });

      // Obter as cidades da região encontrada
      const cidades = regioes.flatMap(regiao => regiao.DESTINO.map(destino => destino.CIDADE));
      
      // Remover quebras de linha das URLs das imagens
      const cidadesFormatadas = cidades.map(cidade => ({
        ...cidade,
        img_cidade: cidade.img_cidade.replace(/\n/g, ''),
        descricao: cidade.descricao.replace(/\n/g, ''),
      }));

      console.log("Cidades encontradas por região:", cidadesFormatadas); // Log para depuração
      return cidadesFormatadas;
    } catch (error) {
      console.error("Erro ao buscar cidades por região:", error);
      throw error;
    }
  }
}

export default RegiaoService;
