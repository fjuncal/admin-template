export const DietaService = {
  getDietaData() {
    return {
      segunda: {
        almoco: [
          "Frango grelhado",
          "Salada de alface [tomate e pepino]",
          "Arroz integral",
        ],
        jantar: [
          "Carne em cubos acebolada",
          "salada[mesma do almoço]",
          "Purê de mandioquinha",
        ],
      },
      terca: {
        almoco: [
          "Carne em cubos acebolado [dia anterior]",
          "Salada de rúcula [tomate cereja]",
          "Batatinhas no forno com ervas",
        ],
        jantar: [
          "Sanduíche de pão integral",
          "pasta de frango",
          "Pepinos em palitos",
        ],
      },
      quarta: {
        almoco: [
          "Sobrecoxa de frango",
          "Salada de alface [tomate e pepino]",
          "Batata no forno",
          "Arroz de brócolis",
        ],
        jantar: [" Macarrão com atum "],
      },
      quinta: {
        almoco: ["Strogonoff de frango fit", "Arroz branco", "Batata no forno"],
        jantar: ["Pastel de frango feito com wrap"],
      },
      sexta: {
        almoco: [
          "Frango (o que tiver sobrado)",
          "Salada de alface [tomate e pepino]",
          "Arroz de brócolis",
        ],
        jantar: [
          "Wrap integral com carne",
          "molho especial a la Natalia",
          "Cenouras baby cruas ou batatinhas ",
        ],
      },
      sabado: {
        almoco: [
          "Frango grelhado",
          "Salada de alface [tomate e pepino]",
          "Arroz",
        ],
        jantar: ["Refeição livre"],
      },
      domingo: {
        almoco: [
          "Almôndegas de carne magra",
          "Salada de alface, rúcula e cenoura ralada",
          "Batata assada",
        ],
        jantar: [
          "Quiche de espinafre e queijo branco ou pizza caseira feita com wrap",
          "Salada de folhas verdes com tomate",
        ],
      },
    };
  },
};

export function getDietaDataPeloDiaDaSemana(diaDaSemana: string) {
  switch (diaDaSemana) {
    case "segunda":
      return DietaService.getDietaData().segunda;
    case "terca":
      return DietaService.getDietaData().terca;
    case "quarta":
      return DietaService.getDietaData().quarta;
    case "quinta":
      return DietaService.getDietaData().quinta;
    case "sexta":
      return DietaService.getDietaData().sexta;
    case "sabado":
      return DietaService.getDietaData().sabado;
    case "domingo":
      return DietaService.getDietaData().domingo;
  }
}
