import { useState } from "react";

import Breadcrumb from "../../components/Breadcrumb";
import TabsLoans from "../../components/loans/TabsLoans";
import LoanSummary from "../../components/loans/LoanSummary";

export default function LoansView() {
  const [tabActive, setTabActive] = useState("all");
  const handleTabClick = (tab: string) => {
    setTabActive(tab);
  };

  return (
    <>
      <div>
        <Breadcrumb className="bg-white border-t border-t-gray-100 pt-2 pb-4 dark:bg-gray-900">
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
        <TabsLoans handleTabClick={handleTabClick} tabActive={tabActive}>
          <div
            className={`${
              tabActive === "all" ? "block" : "hidden"
            } mt-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="p-4">
                  <LoanSummary
                    name="Neil Sims"
                    urlImage="/avatar-men.png"
                    amount={1000}
                    status="active"
                  />
                </li>
                <li className="p-4">
                  <LoanSummary
                    name="Bonnie Green"
                    urlImage="/avatar-men.png"
                    amount={2000}
                    status="inArrears"
                  />
                </li>
                <li className="p-4">
                  <LoanSummary
                    name="Michael Gough"
                    urlImage="/avatar-men.png"
                    amount={3000}
                    status="inactive"
                  />
                </li>
                <li className="p-4">
                  <LoanSummary
                    name="Lana Byrd"
                    urlImage="/avatar-men.png"
                    amount={4000}
                    status="active"
                  />
                </li>
                <li className="p-4">
                  <LoanSummary
                    name="Thomas Markus"
                    urlImage="/avatar-men.png"
                    amount={5000}
                    status="inArrears"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              tabActive === "active" ? "block" : "hidden"
            } pt-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            id="active"
            role="tabpanel"
            aria-labelledby="active-tab"
          >
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="p-4">
                  <LoanSummary
                    name="Neil Sims"
                    urlImage="/avatar-men.png"
                    amount={1000}
                    status="active"
                  />
                </li>
                <li className="p-4">
                  <LoanSummary
                    name="Lana Byrd"
                    urlImage="/avatar-men.png"
                    amount={4000}
                    status="active"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              tabActive === "inArrears" ? "block" : "hidden"
            } pt-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            id="inArrears"
            role="tabpanel"
            aria-labelledby="inArrears-tab"
          >
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="p-4">
                  <LoanSummary
                    name="Bonnie Green"
                    urlImage="/avatar-men.png"
                    amount={2000}
                    status="inArrears"
                  />
                </li>

                <li className="p-4">
                  <LoanSummary
                    name="Thomas Markus"
                    urlImage="/avatar-men.png"
                    amount={5000}
                    status="inArrears"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              tabActive === "inactive" ? "block" : "hidden"
            } pt-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            id="inactive"
            role="tabpanel"
            aria-labelledby="inactive-tab"
          >
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="p-4">
                  <LoanSummary
                    name="Michael Gough"
                    urlImage="/avatar-men.png"
                    amount={3000}
                    status="inactive"
                  />
                </li>
              </ul>
            </div>
          </div>
        </TabsLoans>
      </div>
    </>
  );
}
