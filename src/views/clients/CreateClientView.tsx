import clsx from "clsx";
import { Link } from "react-router-dom";
import { Button, Field, Input, Label } from "@headlessui/react";

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
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium text-white">Nombre</Label>
            {/* <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description> */}
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium text-white">
              Número de Identificación
            </Label>
            {/* <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description> */}
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium text-white">
              Correo Eletronico
            </Label>
            {/* <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description> */}
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium text-white">
              Número Telefonico
            </Label>
            {/* <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description> */}
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium text-white">
              Dirrección
            </Label>
            {/* <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description> */}
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>

          <Button className="block w-full mt-3 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700">
            Registrar
          </Button>
        </form>
      </div>
    </>
  );
}
