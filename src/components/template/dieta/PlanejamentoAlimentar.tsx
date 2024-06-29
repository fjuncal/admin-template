export default function PlanejamentoAlimentar() {
  return (
    <div>
      <div className="flex justify-center p-8 mt-8 ">
        <div className="bg-white rounded-lg w-2/3 lg:w-1/2 xl:w-1/3 p-4 shadow dark:text-gray-200 :bg-gray-800 dark:bg-gray-600">
          <div>
            <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">
              Almoço
            </span>
            <div className="flex mb-2 mt-2">
              <div className="w-1/12">
                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm  block">Frango grelhado</span>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/12">
                <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm  block">
                  Salada de alface, tomate e pepino com azeite e limão
                </span>
                {/* <span className="text-sm">Joey, Matt, CJ and Vlad</span> */}
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/12">
                <span className="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm  block">Arroz integral</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">
              Jantar
            </span>
            <div className="flex mb-2 mt-2">
              <div className="w-1/12">
                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm block">Carne em cubos acebolada</span>
                {/* <span className="text-sm">Zoom ID: 1134 11 1134</span> */}
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/12">
                <span className="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm  block">Salada mesma do almoço</span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/12">
                <span className="bg-black h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm  block">Purê de mandioquinha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
