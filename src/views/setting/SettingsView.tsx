import { ChevronRightIcon } from "@heroicons/react/24/solid";

import Breadcrumb from "../../components/Breadcrumb";

export default function SettingsView() {
  return (
    <>
      <Breadcrumb className="border-t border-t-gray-100 pt-2 pb-4 dark:bg-gray-900">
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-300 mx-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-xs font-medium text-gray-400 md:ms-2 dark:text-gray-400">
              Configuraciones
            </span>
          </div>
        </li>
      </Breadcrumb>

      <h3 className="mx-4 mb-4 text-lg font-semibold">Notificaciones</h3>

      <div className="flex items-center mx-4 rounded-lg p-4 mb-8 bg-white dark:bg-gray-800">
        <div className="flex-1">
          <h4 className="text-md font-medium text-gray-900 truncate dark:text-white">
            Notificaciones push
          </h4>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Recibe pagos, recordatorios y noticias.
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400"></div>
        </label>
      </div>

      <h3 className="mx-4 mb-4 text-lg font-semibold">Seguridad</h3>

      <div className="divide-y divide-gray-200 mb-8 dark:divide-gray-700">
        <div className="flex items-center mx-4 p-4 rounded-t-lg bg-white dark:bg-gray-800">
          <div className="flex-1">
            <h4 className="text-md font-medium text-gray-900 truncate dark:text-white">
              Cambiar contraseña
            </h4>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-300 dark:text-white">
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center mx-4 p-4 rounded-b-lg bg-white dark:bg-gray-800">
          <div className="flex-1">
            <h4 className="text-md font-medium text-gray-900 truncate dark:text-white">
              Autenticación de dos factores
            </h4>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              Añade una capa extra de seguridad.
            </p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400"></div>
          </label>
        </div>
      </div>

      <h3 className="mx-4 mb-4 text-lg font-semibold">Acerca de</h3>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center mx-4 p-4 rounded-t-lg bg-white dark:bg-gray-800">
          <div className="flex-1">
            <h4 className="text-md font-medium text-gray-900 truncate dark:text-white">
              Versión de la app
            </h4>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-300 dark:text-white">
            1.2.0
          </div>
        </div>
        <div className="flex items-center mx-4 p-4 bg-white dark:bg-gray-800">
          <div className="flex-1">
            <h4 className="text-md font-medium text-gray-900 truncate dark:text-white">
              Términos de servicio
            </h4>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-300 dark:text-white">
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center mx-4 p-4 rounded-b-lg bg-white dark:bg-gray-800">
          <div className="flex-1">
            <h4 className="text-md font-medium text-gray-900 truncate dark:text-white">
              Política de privacidad
            </h4>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-300 dark:text-white">
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
}
