import { Link } from "react-router-dom";
import SearchInput from "../../components/clients/SearchInput";

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
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:py-4">
              <div className="flex items-center ">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:py-4">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-2.jpg"
                    alt="Michael image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $67
                </div>
              </div>
            </li>
            <li className="px-4 py-4 sm:py-4">
              <div className="flex items-center ">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-4.jpg"
                    alt="Lana image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $367
                </div>
              </div>
            </li>
            <li className="px-4 pt-4 pb-0 sm:pt-4">
              <div className="flex items-center ">
                <div className="shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt="Thomas image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
