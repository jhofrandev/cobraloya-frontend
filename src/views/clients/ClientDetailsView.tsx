import { Link } from "react-router-dom";

export default function ClientDetailsView() {
  return (
    <>
      <h1 className="text-slate-300 text-5lx fint-black">Nombre del Cliente</h1>
      <p className="text-slate-300/50 text-2xl font-light mt-5 mb-4">
        Ingrese la información de su nuevo cliente
      </p>

      <nav>
        <Link
          to="/"
          className="bg-emerald-700 hover:bg-emerald-800 px-10 py-3 text-slate-300 text-xl font-bold cursor-pointer transition-colors"
        >
          Agregar Prestamo
        </Link>
      </nav>
    </>
  );
}
