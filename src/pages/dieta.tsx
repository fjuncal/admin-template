import Layout from "@/components/template/Layout";
import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";

export default function Dieta() {
  const [diasDaSemana] = useState([
    { label: "Segunda", value: "segunda" },
    { label: "Terça", value: "terca" },
    { label: "Quarta", value: "quarta" },
    { label: "Quinta", value: "quinta" },
    { label: "Sexta", value: "sexta" },
    { label: "Sábado", value: "sabado" },
    { label: "Domingo", value: "domingo" },
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
            text-sm
            `}
        />
      </div>
    </Layout>
  );
}
