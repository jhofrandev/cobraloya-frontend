import { Link } from "react-router-dom";

type TabsLoansProps = {
  children: React.ReactNode;
  handleTabClick: (tab: string) => void;
  tabActive: string;
};

export default function TabsLoans({
  children,
  handleTabClick,
  tabActive,
}: TabsLoansProps) {
  return (
    <>
      <div className="border-b border-gray-200 bg-white dark:border-gray-700">
        <ul
          className={`flex px-4 text-sm font-medium text-center text-gray-400`}
        >
          <li className="">
            <button
              className={`inline-block py-2 px-4   ${
                tabActive === "all"
                  ? "text-gray-700 border-b-2"
                  : "hover:border-b-2 hover:border-b-gray-300 hover:text-gray-600"
              }`}
              type="button"
              onClick={() => handleTabClick("all")}
              // all
            >
              Todos
            </button>
          </li>
          <li>
            <button
              className={`inline-block py-2 px-4   ${
                tabActive === "active"
                  ? "text-gray-700 border-b-2"
                  : "hover:border-b-2 hover:border-b-gray-300 hover:text-gray-600"
              }`}
              type="button"
              onClick={() => handleTabClick("active")}
              // active
            >
              Activos
            </button>
          </li>
          <li>
            <button
              className={`inline-block py-2 px-4   ${
                tabActive === "inArrears"
                  ? "text-gray-700 border-b-2"
                  : "hover:border-b-2 hover:border-b-gray-300 hover:text-gray-600"
              }`}
              type="button"
              onClick={() => handleTabClick("inArrears")}
              // inArrears
            >
              En mora
            </button>
          </li>
          <li>
            <button
              className={`inline-block py-2 px-4   ${
                tabActive === "inactive"
                  ? "text-gray-700 border-b-2"
                  : "hover:border-b-2 hover:border-b-gray-300 hover:text-gray-600"
              }`}
              type="button"
              onClick={() => handleTabClick("inactive")}
              // inactive
            >
              Pagados
            </button>
          </li>
        </ul>
      </div>
      <Link
        to="#"
        className="block focus:outline-none text-white mx-4 mt-4 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm text-center px-4 py-2.5 dark:focus:ring-yellow-900"
      >
        Nuevo prestamos
      </Link>
      <div id="default-tab-content">{children}</div>
    </>
  );
}
