import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <main className="min-h-[calc(100vh-128px)] flex flex-col gap-8 justify-center">
        <h1 className="flex items-center justify-center">
          <span className="self-center whitespace-nowrap py-8 text-5xl font-[Asimovian] font-semibold  dark:text-white">
            Cobralo<span className="text-yellow-300">YA!</span>
          </span>
        </h1>
        <Outlet />
      </main>
    </>
  );
}
