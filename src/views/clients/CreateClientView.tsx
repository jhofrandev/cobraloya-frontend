import clsx from "clsx";
import { Link } from "react-router-dom";
import { Description, Field, Input, Label } from "@headlessui/react";

export default function CreateClientView() {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-slate-300 text-5lx fint-black">
          Registrar Cliente
        </h1>
        <p className="text-slate-300/50 text-2xl font-light mt-5 mb-4">
          Ingrese la información de su nuevo cliente
        </p>

        <nav>
          <Link
            to="/"
            className="bg-emerald-700 hover:bg-emerald-800 px-10 py-3 text-slate-300 text-xl font-bold cursor-pointer transition-colors"
          >
            Volver a Clientes
          </Link>
        </nav>

        <form className={clsx("mt-10 p-10 bg-slate-900/50")}>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Name</Label>
            <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>
        </form>
      </div>
    </>
  );
}
