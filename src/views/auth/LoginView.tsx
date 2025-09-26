import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <form className="w-full max-w-md mx-auto px-4">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Su correo electrónico"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="********"
          required
        />
      </div>
      <Link
        to="/"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm block  w-full px-5 py-2.5 text-center dark:focus:ring-yellow-800"
      >
        Entrar
      </Link>
      <div className="mt-4 text-center">
        <Link to="/auth/register" className="text-sm dark:text-white">
          No tienes cuenta?,{" "}
          <span className="text-yellow-400 hover:text-yellow-500 dark:text-yellow-500">
            Regístrate aquí
          </span>
        </Link>
      </div>
    </form>
  );
}
