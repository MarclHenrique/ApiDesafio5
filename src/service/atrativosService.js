import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AtrativosService {
  static async listarAtrativos() {
    try {
        let atrativos = await prisma.aTRATIVOS.findMany({
            include: {
                CIDADE: {
                    include: {
                        DESTINO: true,
                    },
                },
            },
        });

        atrativos = atrativos.map((atrativo) => {
            const destino = atrativo.CIDADE.DESTINO[0];
            return {
                id: atrativo.id_atrativos,
                nome: atrativo.nome,  
                descricao: atrativo.descricao.replace(/\n/g, ""),
                img_atrativo: atrativo.img_atrativo.replace(/\n/g, ""),
                latitude: destino ? destino.latitude : null,
                longitude: destino ? destino.longitude : null,
            };
        });

        console.log("Atrativos encontrados:", atrativos); // Log para depuração
        return atrativos;
    } catch (error) {
        console.error("Erro ao buscar Atrativos:", error);
        throw error;
    }
}
  static async listarAtrativoPorId(idAtrativo) {
    try {
      const atrativo = await prisma.aTRATIVOS.findUnique({
        where: { id_atrativos: parseInt(idAtrativo) },
        include: {
          CIDADE: {
            include: {
              DESTINO: true,
            },
          },
        },
      });

      if (atrativo) {
        const destino = atrativo.CIDADE.DESTINO[0];
        return {
          ...atrativo,
          img_atrativo: atrativo.img_atrativo.replace(/\n/g, ""),
          descricao: atrativo.descricao.replace(/\n/g, ""),
          latitude: destino ? destino.latitude : null,
          longitude: destino ? destino.longitude : null,
        };
      }

      return null;
    } catch (error) {
      console.error("Erro ao buscar Atrativo por ID:", error);
      throw error;
    }
  }
}

export default AtrativosService;
