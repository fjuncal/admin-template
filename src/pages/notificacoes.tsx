import Layout from "@/components/template/Layout";
import { AppConsumer } from "@/data/context/AppContext";

export default function Notificacoes() {
  return (
    <Layout
      titulo="Notificacoes"
      subtitulo="Aqui você irá gerenciar as suas notificações"
    >
      <AppConsumer>{(dados) => <h3>{dados.nome}</h3>}</AppConsumer>
      <h3>Conteudo!!</h3>
    </Layout>
  );
}
