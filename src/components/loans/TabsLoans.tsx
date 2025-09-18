type TabsLoansProps = {
  children: React.ReactNode;
};

export default function TabsLoans({ children }: TabsLoansProps) {
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="all-tab"
              data-tabs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="false"
            >
              Todos
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="active-tab"
              data-tabs-target="#active"
              type="button"
              role="tab"
              aria-controls="active"
              aria-selected="false"
            >
              Activos
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="inArrears-tab"
              data-tabs-target="#inArrears"
              type="button"
              role="tab"
              aria-controls="inArrears"
              aria-selected="false"
            >
              En mora
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="inactive-tab"
              data-tabs-target="#inactive"
              type="button"
              role="tab"
              aria-controls="inactive"
              aria-selected="false"
            >
              Pagados
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">{children}</div>
    </>
  );
}
