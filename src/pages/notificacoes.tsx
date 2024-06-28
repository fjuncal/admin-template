import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
  const { tema, alternarTema } = useAppData();
  return (
    <Layout
      titulo="Notificacoes"
      subtitulo="Aqui você irá gerenciar as suas notificações"
    >
      <h3>{tema}</h3>
      <button onClick={alternarTema}>Click</button>
    </Layout>
  );
}
