import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <>
      <Header />

      <section className="min-h-[calc(100vh-128px)] mx-auto mt-5 p-5">
        <Outlet />
      </section>

      <footer className="py-5">
        <p className="text-center text-slate-300">
          Todos los derechos reservados {new Date().getFullYear()} &copy;
          CobraloYa
        </p>
      </footer>

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
