import clsx from "clsx";
import { useState } from "react";

import ItemNavLink from "../ItemNavLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={clsx(
        "mx-auto",
        "xl:rounded-b-xl",
        "py-4 px-4 md:px-8 lg:px-12 xl:px-16",
        "max-w-screen-xl",
        "flex flex-wrap items-center justify-between",
        "bg-white shadow-xs dark:bg-gray-950 dark:shadow-gray-800"
      )}
    >
      <a href="/" className="flex items-center">
        <span className="self-center whitespace-nowrap text-2xl lg:text-4xl font-[Asimovian] font-semibold  dark:text-white">
          Cobralo<span className="text-yellow-300">YA!</span>
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex  items-center justify-center md:hidden p-2 w-10 h-10  rounded-lg dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 text-sm text-gray-300  dark:text-gray-400  dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen
            ? "opacity-100 max-h-[500px]"
            : "opacity-0 max-h-0 overflow-hidden"
        } w-full md:block md:w-auto md:opacity-100 md:max-h-[500px] transition-all duration-300 ease-in-out`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <ItemNavLink
              to="/"
              title="Inicio"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
          <li>
            <ItemNavLink
              to="/clients"
              title="Clientes"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
          <li>
            <ItemNavLink
              to="/loans"
              title="Préstamos"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
          <li>
            <ItemNavLink
              to="/payment/register"
              title="Pagos"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
          <li>
            <ItemNavLink
              to="/settings"
              title="Ajustes"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
          <li className="border-t border-gray-300 md:border-none dark:border-gray-700">
            <ItemNavLink
              to="/auth/login"
              title="Salir"
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
