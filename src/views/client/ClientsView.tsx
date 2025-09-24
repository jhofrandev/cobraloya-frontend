import { Link } from "react-router-dom";

import SearchInput from "../../components/clients/SearchInput";
import ClientSummary from "../../components/clients/ClientSummary";
import Breadcrumb from "../../components/Breadcrumb";

export default function ClientsView() {
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
            <span className="ms-1 text-xs font-medium text-gray-400 md:ms-2 dark:text-gray-400">
              Clientes
            </span>
          </div>
        </li>
      </Breadcrumb>
      <SearchInput />
      <Link
        to="#"
        className="block focus:outline-none text-white mx-4 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm text-center py-2.5 dark:focus:ring-yellow-900"
      >
        Nuevo cliente
      </Link>
      <div className="mt-8">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <div className="p-4">
            <Link to={`/clients/1`} className="">
              <ClientSummary
                name="Neil Sims"
                urlImage="/avatar-men.png"
                status="active"
              />
            </Link>
          </div>
          <div className="p-4">
            <Link to={`/clients/2`} className="">
              <ClientSummary
                name="Bonnie Green"
                urlImage="/avatar-men.png"
                status="inArrears"
              />
            </Link>
          </div>

          <div className="p-4">
            <Link to={`/clients/3`} className="">
              <ClientSummary
                name="Michael Gough"
                urlImage="/avatar-men.png"
                status="inactive"
              />
            </Link>
          </div>
          <div className="p-4">
            <Link to={`/clients/4`} className="">
              <ClientSummary
                name="Lana image"
                urlImage="/avatar-men.png"
                status="inArrears"
              />
            </Link>
          </div>
          <div className="p-4">
            <Link to={`/clients/5`} className="">
              <ClientSummary
                name="Thomes Lean"
                urlImage="/avatar-men.png"
                status="active"
              />
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
}
