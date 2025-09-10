import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <>
      <Header />

      <section className="min-h-[calc(100vh-128px)]">
        <Outlet />
      </section>

      <Footer />
    </>
  );
}
