import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function PopoverHeader() {
  return (
    <Popover>
      <PopoverButton className="block text-sm/6 font-semibold text-slate-300/50 focus:outline-none data-active:text-slate-300 data-focus:outline data-focus:outline-slate-300 data-hover:text-slate-300">
        MENÚ
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="divide-y divide-slate-300/5 rounded-xl bg-slate-300/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
      >
        <div className="p-3">
          <a
            className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-slate-300">Mi Perfil</p>
            <p className="text-slate-300/50">Ver y gestionar su información</p>
          </a>
          <a
            className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-slate-300">Reporte</p>
            <p className="text-slate-300/50">Generar información detallada</p>
          </a>
        </div>
        <div className="p-3">
          <a
            className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#"
          >
            <p className="font-semibold text-slate-300">Cerrar Sesión</p>
            <p className="text-slate-300/50">Nos vemos luego!</p>
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
