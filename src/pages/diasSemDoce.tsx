import Layout from "@/components/template/Layout";
import React from "react";
import { IconeLixeira, IconeAdicionar } from "@/components/icons";

export default function DiasSemDoce() {
  function renderizarBotoes() {
    return (
      <div className="">
        <button
          className=" mr-8 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-fit max-w-[40px] h-10 max-h-[40px] rounded-lg  bg-green-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
          type="button"
        >
          {IconeAdicionar}
        </button>
        <button
          className=" transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-fit max-w-[40px] h-10 max-h-[40px] rounded-lg  bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
          type="button"
        >
          {IconeLixeira}
        </button>
      </div>
    );
  }

  return (
    <Layout
      titulo="Dias sem doce"
      subtitulo="Adicione a quantidade de dias que você ficou sem doce"
    >
      <div className="flex items-start justify-center">
        <div>{renderizarBotoes()}</div>
      </div>
    </Layout>
  );
}
