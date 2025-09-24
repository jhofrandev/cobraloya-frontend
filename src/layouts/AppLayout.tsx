import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-128px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
