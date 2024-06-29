import BotoesDiasDeSemana from "@/components/template/BotoesDiasDeSemana";
import Layout from "@/components/template/Layout";

export default function Dieta() {
  return (
    <Layout
      titulo="Dieta da Semana"
      subtitulo="Consulte pelo dia da semana a dieta do dia!!"
    >
      <BotoesDiasDeSemana />
    </Layout>
  );
}
