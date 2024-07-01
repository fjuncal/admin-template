import Layout from "@/components/template/Layout";
import React, { useState } from "react";
import { IconeLixeira, IconeAdicionar } from "@/components/icons";

export default function DiasSemDoce() {
  function teste() {
    const [fellipeDias, setfelipeDias] = useState(0);
    const [nataliaDias, setNataliaDias] = useState(0);
    return (
      <div id="team" className=" dark:bg-gray-800">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className=" overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className=" overflow-hidden px-6">
                  <img
                    src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    Fellipe Juncal
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Esta a {fellipeDias} dias sem comer doce
                  </p>
                  <div className="mt-2 mb-5 space-x-2">
                    <button
                      className=" mr-8 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-fit max-w-[40px] h-10 max-h-[40px] rounded-lg  bg-green-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                      type="button"
                      onClick={() => setfelipeDias(fellipeDias + 1)}
                    >
                      {IconeAdicionar}
                    </button>
                    <button
                      className=" transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-fit max-w-[40px] h-10 max-h-[40px] rounded-lg  bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                      type="button"
                      onClick={() => setfelipeDias(0)}
                    >
                      {IconeLixeira}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="relative overflow-hidden px-6">
                  <img
                    src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                    alt="title image"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">
                    Natalia Beloti
                  </p>
                  <p className="text-gray-500 leading-relaxed font-light">
                    Está a {nataliaDias} dias sem comer doce
                  </p>
                  <div className="mt-2 mb-5 space-x-2">
                    <button
                      className=" mr-8 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-fit max-w-[40px] h-10 max-h-[40px] rounded-lg  bg-green-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                      type="button"
                      onClick={() => setNataliaDias(nataliaDias + 1)}
                    >
                      {IconeAdicionar}
                    </button>
                    <button
                      className=" transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-fit max-w-[40px] h-10 max-h-[40px] rounded-lg  bg-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                      type="button"
                      onClick={() => setNataliaDias(0)}
                    >
                      {IconeLixeira}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              ></div>
            </div>
            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout
      titulo="Dias sem doce"
      subtitulo="Adicione a quantidade de dias que você ficou sem doce"
    >
      <div className="justify-center align-middle items-center">{teste()}</div>
    </Layout>
  );
}
