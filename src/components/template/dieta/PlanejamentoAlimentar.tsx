interface PlanejamentoAlimentarProps {
  diaDaSemana: any;
}

export default function PlanejamentoAlimentar(
  props: PlanejamentoAlimentarProps
) {
  const diaDaSemana = props.diaDaSemana;

  function renderizarAlmoco() {
    return diaDaSemana.almoco.map((alimento: string) => (
      <div className="flex mb-2 mt-2">
        <div className="w-1/12">
          <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div className="w-9/12">
          <span className="text-sm  block">{alimento}</span>
        </div>
      </div>
    ));
  }
  function renderizarJantar() {
    return diaDaSemana.jantar.map((alimento: string) => (
      <div className="flex mb-2 mt-2">
        <div className="w-1/12">
          <span className="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div className="w-9/12">
          <span className="text-sm  block">{alimento}</span>
        </div>
      </div>
    ));
  }

  return (
    <div>
      {diaDaSemana.almoco.length > 0 && diaDaSemana.jantar.length > 0 ? (
        <div className="flex justify-center p-8 mt-8 ">
          <div className="bg-white rounded-lg lg:w-1/2 xl:w-1/3 p-4 shadow dark:text-gray-200 :bg-gray-800 dark:bg-gray-600">
            <div>
              <span className="text-gray-900 font-semibold relative inline-block date uppercase tracking-widest">
                Almoço
              </span>
              {renderizarAlmoco()}
            </div>
            <div>
              <span className="text-gray-900 relative inline-block date uppercase font-semibold tracking-widest">
                Jantar
              </span>
              {renderizarJantar()}
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-center mt-5">
          Escolha um dia para ver o cardápio...
        </h3>
      )}
    </div>
  );
}
