import BotoesDiasDeSemana from "@/components/template/dieta/BotoesDiasDeSemana";
import PlanejamentoAlimentar from "@/components/template/dieta/PlanejamentoAlimentar";
import Layout from "@/components/template/Layout";

export default function Dieta() {
  return (
    <Layout
      titulo="Dieta da Semana"
      subtitulo="Consulte pelo dia da semana a dieta do dia!!"
    >
      <BotoesDiasDeSemana />
      <PlanejamentoAlimentar />
    </Layout>
  );
}
