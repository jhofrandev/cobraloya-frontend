import Breadcrumb from "@/components/Breadcrumb";
import { formatCurrency } from "@/utils/utils";

export default function DetailsLoanView() {
  return (
    <>
      <Breadcrumb className="pt-2 pb-4">
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
              Préstamos
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
              Detalles del prestamo
            </span>
          </div>
        </li>
      </Breadcrumb>

      <div className="m-4 bg-white dark:bg-gray-950 rounded-lg p-4 shadow-xs  dark:shadow-gray-800 mb-8 dark:text-white">
        <h4 className="text-xl font-bold pb-4">Información del Préstamo</h4>
        <section className="divide-y divide-gray-200">
          <article>
            <ul className="space-y-2">
              <li>
                <p className="flex justify-between">
                  <span>Monto Original</span>
                  <span className="font-semibold">{formatCurrency(5000)}</span>
                </p>
              </li>
              <li>
                <p className="flex justify-between">
                  <span>Monto Pagado</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(3500)}
                  </span>
                </p>
              </li>
              <li className="mb-4">
                <p className="flex justify-between">
                  <span>Monto Pendiente</span>
                  <span className="font-semibold">{formatCurrency(1500)}</span>
                </p>
              </li>
            </ul>
          </article>
          <article className="mt-4 space-y-2">
            <div className="flex justify-between">
              <p>Fecha de vencimiento</p>
              <p className="font-semibold">15 de diciembre de 2025</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Estado</p>
              <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-bold px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 ">
                <span className="w-2 h-2 me-1 bg-red-600 rounded-full"></span>
                En Mora
              </span>
            </div>
          </article>
        </section>
      </div>

      <p className="mb-4 mx-4 text-xl font-bold dark:text-white">
        Historial de Pagos
      </p>

      <div className="flow-root mx-4 space-y-2">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-xs dark:bg-gray-950 dark:shadow-gray-800">
          <div className="shrink-0 rounded-full bg-green-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fill-rule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clip-rule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-semibold text-gray-900 truncate dark:text-white">
              Pago Recibido
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              1 de noviembre de 2025
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatCurrency(1200)}
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-xs dark:bg-gray-950 dark:shadow-gray-800">
          <div className="shrink-0 rounded-full bg-green-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fill-rule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clip-rule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-semibold text-gray-900 truncate dark:text-white">
              Pago Recibido
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              1 de noviembre de 2025
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatCurrency(1200)}
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-xs dark:bg-gray-950 dark:shadow-gray-800">
          <div className="shrink-0 rounded-full bg-green-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fill-rule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clip-rule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-semibold text-gray-900 truncate dark:text-white">
              Pago Recibido
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              1 de noviembre de 2025
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatCurrency(1200)}
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-xs dark:bg-gray-950 dark:shadow-gray-800">
          <div className="shrink-0 rounded-full bg-green-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fill-rule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clip-rule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-semibold text-gray-900 truncate dark:text-white">
              Pago Recibido
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              1 de noviembre de 2025
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatCurrency(1200)}
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-xs dark:bg-gray-950 dark:shadow-gray-800">
          <div className="shrink-0 rounded-full bg-green-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fill-rule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clip-rule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="font-semibold text-gray-900 truncate dark:text-white">
              Pago Recibido
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              1 de noviembre de 2025
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatCurrency(1200)}
          </div>
        </div>
      </div>
    </>
  );
}
