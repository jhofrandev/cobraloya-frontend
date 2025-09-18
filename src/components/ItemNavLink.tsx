import { NavLink } from "react-router-dom";

type ItemNavLinkProps = {
  to: string;
  title: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ItemNavLink({
  to,
  title,
  isMenuOpen,
  setIsMenuOpen,
}: ItemNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block py-2 px-3 text-white bg-yellow-300 rounded-sm md:bg-transparent md:text-yellow-300 md:p-0 dark:text-white md:dark:text-yellow-300"
          : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }
      aria-current="page"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {title}
    </NavLink>
  );
}
