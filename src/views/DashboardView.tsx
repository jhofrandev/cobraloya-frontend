import { Link } from "react-router-dom";

export default function DashboardView() {
  return (
    <>
      <h1 className="text-slate-300 text-5lx fint-black">Mis Clientes</h1>
      <p className="text-slate-300/50 text-2xl font-light mt-5 mb-4">
        Administra y Maneja tus clientes
      </p>
      <nav>
        <Link
          to="#"
          className="bg-emerald-700 hover:bg-emerald-800 px-10 py-3 text-slate-300 text-xl font-bold cursor-pointer transition-colors"
        >
          Agregar Cliente
        </Link>
      </nav>

      <section>
        <article></article>
      </section>
    </>
  );
}
