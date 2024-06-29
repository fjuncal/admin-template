export default function PlanejamentoAlimentar() {
  return (
    <div>
      <div className="flex justify-center p-8 mt-8 ">
        <div className="bg-white rounded-lg w-2/3 lg:w-1/2 xl:w-1/3 p-4 shadow dark:text-gray-200 :bg-gray-800 dark:bg-gray-600">
          <div>
            <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">
              Wednesday 8
            </span>
            <div className="flex mb-2">
              <div className="w-1/12">
                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm font-semibold block">
                  Morning Standup
                </span>
                <span className="text-sm">Zoom ID: 1134 11 1134</span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/12">
                <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm font-semibold block">
                  Core Development
                </span>
                <span className="text-sm">Joey, Matt, CJ and Vlad</span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/12">
                <span className="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm font-semibold block">
                  Interview with Ed Harris
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">
              Thursday 9
            </span>
            <div className="flex mb-2">
              <div className="w-1/12">
                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm font-semibold block">
                  Morning Standup
                </span>
                <span className="text-sm">Zoom ID: 1134 11 1134</span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/12">
                <span className="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
              </div>
              <div className="w-9/12">
                <span className="text-sm font-semibold block">
                  Dinner with Mom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
