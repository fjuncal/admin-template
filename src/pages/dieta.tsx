import BotoesDiasDeSemana from "@/components/template/dieta/BotoesDiasDeSemana";
import PlanejamentoAlimentar from "@/components/template/dieta/PlanejamentoAlimentar";
import { getDietaDataPeloDiaDaSemana } from "@/components/template/dieta/service/DietaService";
import Layout from "@/components/template/Layout";
import { useState } from "react";

export default function Dieta() {
  const [diaDaSemana, setDiaDaSemana] = useState<{
    almoco: string[];
    jantar: string[];
  }>({ almoco: [], jantar: [] });

  function diaDaSemanaClicado(diaDaSemana: string) {
    setDiaDaSemana((prevState) => ({
      ...prevState,
      ...getDietaDataPeloDiaDaSemana(diaDaSemana),
    }));
  }
  return (
    <Layout
      titulo="Dieta da Semana"
      subtitulo="Consulte pelo dia da semana a dieta do dia!!"
    >
      <BotoesDiasDeSemana onClick={diaDaSemanaClicado} />
      <PlanejamentoAlimentar diaDaSemana={diaDaSemana} />
    </Layout>
  );
}
