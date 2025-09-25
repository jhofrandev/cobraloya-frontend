import Breadcrumb from "@/components/Breadcrumb";

export default function NewLoanView() {
  return (
    <>
      <Breadcrumb className="py-2">
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
            <span className="ms-1 text-xs font-medium text-gray-300 md:ms-2 dark:text-gray-300">
              Prestamos
            </span>
          </div>
        </li>
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
              Registro
            </span>
          </div>
        </li>
      </Breadcrumb>

      <h2 className="text-xl font-bold mt-6 mx-4 dark:text-white">
        Registrar Préstamo
      </h2>

      <form className="mx-4 mt-4">
        <div className="mb-5">
          <label
            htmlFor="client"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seleccionar Cliente
          </label>
          <select
            id="client"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          >
            <option selected>Seleccione un cliente</option>
            <option value="US">Thomas</option>
            <option value="FR">Miguel</option>
            <option value="DE">Francis</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Monto principal
          </label>
          <input
            type="text"
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="definir monto principal"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="interestRate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tasa de interés (%)
          </label>
          <input
            type="text"
            id="interestRate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Ingresar tasa de interés"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="loanTerm"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Plazo del préstamo (meses)
          </label>
          <input
            type="text"
            id="loanTerm"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Plazo del préstamo"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="paymentFrequency"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Frecuencia de pago
          </label>
          <select
            id="paymentFrequency"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          >
            <option selected>Semanal</option>
            <option value="Mensual">Mensual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Anual">Anual</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Registrar Préstamo
        </button>
      </form>
    </>
  );
}
