import AccordionCard from "@/components/template/AccordionCard";
import Layout from "@/components/template/Layout";
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";

export default function Dieta() {
  const [diasDaSemana] = useState([
    { label: "Seg", value: "segunda" },
    { label: "Ter", value: "terca" },
    { label: "Qua", value: "quarta" },
    { label: "Qui", value: "quinta" },
    { label: "Sex", value: "sexta" },
    { label: "Sáb", value: "sabado" },
    { label: "Dom", value: "domingo" },
  ]);
  const [size, setSize] = useState(diasDaSemana[1].value);
  return (
    <Layout
      titulo="Dieta da Semana"
      subtitulo="Consulte pelo dia da semana a dieta do dia!!"
    >
      <div className="card">
        <SelectButton
          value={size}
          onChange={(e) => setSize(e.value)}
          options={diasDaSemana}
          className={`flex justify-center items-center
            text-sm mb-5
            `}
        />
      </div>
      <AccordionCard textoAlmoco="teste" textoJantar="teste" />
    </Layout>
  );
}
