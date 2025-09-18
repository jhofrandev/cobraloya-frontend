import Breadcrumb from "../../components/Breadcrumb";
import TabsLoans from "../../components/loans/TabsLoans";

export default function LoansView() {
  return (
    <>
      <div>
        <Breadcrumb>
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
        </Breadcrumb>
        <TabsLoans>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <p>Todos</p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="active"
            role="tabpanel"
            aria-labelledby="active-tab"
          >
            <p>Activos</p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="inArrears"
            role="tabpanel"
            aria-labelledby="inArrears-tab"
          >
            <p>En mora</p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="inactive"
            role="tabpanel"
            aria-labelledby="inactive-tab"
          >
            <p>Inactivos</p>
          </div>
        </TabsLoans>
      </div>
    </>
  );
}
