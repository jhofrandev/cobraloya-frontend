import { Link } from "react-router-dom";

import SearchInput from "../../components/clients/SearchInput";
import ClientSummary from "../../components/clients/ClientSummary";

export default function ClientsView() {
  return (
    <>
      <div className="py-4">
        <SearchInput />
        <Link
          to="#"
          className="block focus:outline-none text-white mx-4 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm text-center px-4 py-2.5 dark:focus:ring-yellow-900"
        >
          Nuevo cliente
        </Link>
        <div className="flow-root mt-4">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="px-4 py-4 sm:py-4">
              <ClientSummary
                name="Neil Sims"
                urlImage="/avatar-men.png"
                status="active"
              />
            </li>
            <li className="px-4 py-4 sm:py-4">
              <ClientSummary
                name="Bonnie Green"
                urlImage="/avatar-men.png"
                status="inArrears"
              />
            </li>
            <li className="px-4 py-4 sm:py-4">
              <ClientSummary
                name="Michael Gough"
                urlImage="/avatar-men.png"
                status="inactive"
              />
            </li>
            <li className="px-4 py-4 sm:py-4">
              <ClientSummary
                name="Lana image"
                urlImage="/avatar-men.png"
                status="inArrears"
              />
            </li>
            <li className="px-4 pt-4 pb-0 sm:pt-4">
              <ClientSummary
                name="Thomes Lean"
                urlImage="/avatar-men.png"
                status="active"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
