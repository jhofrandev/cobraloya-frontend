import Breadcrumb from "../../components/Breadcrumb";
import { formatCurrency } from "../../utils/utils";

export default function RegisterPaymentView() {
  return (
    <>
      <Breadcrumb className=" pt-2 pb-4">
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
              Nuevo pago
            </span>
          </div>
        </li>
      </Breadcrumb>

      <form className="px-4 mb-8">
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block mb-4 text-medium font-bold text-gray-400 dark:text-white"
          >
            Seleccionar préstamo
          </label>
          <select className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
            <option selected>Seleccionar un préstamo</option>
            <option value="">Thomas</option>
            <option value="US">Miguel Vega</option>
            <option value="CA">Fernando</option>
            <option value="FR">Jose</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="block mb-4 text-medium font-bold text-gray-400 dark:text-white"
          >
            Detalles del pago
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-white border border-gray-200 text-gray-400 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5 placeholder-gray-400  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Monto"
            />
          </div>
          <div className="relative mb-8">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM9 11v-1H8v1h1Zm0 .01H8v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1Zm4-.01v1h1v-1h-1Zm0-1h1V9h-1v1Zm-.01 0V9h-1v1h1Zm0 1h-1v1h1v-1ZM9 15v-1H8v1h1Zm0 .01H8v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM8 11v.01h2V11H8Zm1 1.01h.01v-2H9v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H9v2h.01v-2Zm4-.01v.01h2v-.01h-2Zm1-1h.01v2H14v-2Zm-.99 1h-.01v2h.01v-2Zm-1 1.01h.01v-2H12v2ZM8 15v.01h2V15H8Zm1 1.01h.01v-2H9v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H9v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z" />
              </svg>
            </div>
            <input
              type="date"
              id="input-group-1"
              className="bg-white border border-gray-200 text-gray-400 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5 placeholder-gray-400  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Monto"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-800 dark:focus:ring-yellow-300"
        >
          Registrar pago
        </button>
      </form>
      <p className="mb-4 mx-4 text-medium font-bold text-gray-400 dark:text-white">
        Historial de pagos recientes
      </p>

      <div className="flow-root mx-4">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="shrink-0 rounded-full bg-green-200 p-2">
                <svg
                  className="w-8 h-8 text-green-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm2 3a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H8z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Pago #1
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  15 sep 2025
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {formatCurrency(1200)}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="shrink-0 rounded-full bg-green-200 p-2">
                <svg
                  className="w-8 h-8 text-green-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm2 3a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H8z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Pago #2
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  10 sep 2025
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {formatCurrency(1000)}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
