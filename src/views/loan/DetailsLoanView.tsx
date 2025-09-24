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

      <div className="m-4 bg-white rounded-lg p-4 shadow-xs mb-8">
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

      <h3 className="mx-4 text-xl font-bold">Historial de pagos</h3>
    </>
  );
}
