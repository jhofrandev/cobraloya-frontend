import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

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

      <section className="flex gap-5 flex-wrap mt-10">
        <article className="flex gap-5 bg-slate-300/5 p-5">
          <figure>
            <img
              src="avatar.png"
              alt="imagen del avatar cliente"
              className="w-20 h-20"
            />
          </figure>

          <div className="">
            <p className="text-slate-300">Nombre Apellido</p>
            <p className="text-sm text-slate-300/70">1021929929</p>
            <p className="flex items-center gap-1 text-slate-300/50">
              <HomeIcon className="w-3 h-3" />
              <span className="text-xs">Cl. 1 #02 - 03</span>
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-1 text-slate-300/50">
                <PhoneIcon className="w-3 h-3" />
                <span className="text-xs">301 3424564</span>
              </p>

              <p className="flex items-center gap-1 text-slate-300/50">
                <EnvelopeIcon className="w-3 h-3" />
                <span className="text-xs">correo@correo.com</span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-x-6">
            <Menu as="div" className="relative flex-none">
              <MenuButton className="-m-2.5 block p-2.5 text-slate-300 hover:text-slate-300/50">
                <span className="sr-only">opciones</span>
                <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-950/90 py-2 shadow-lg ring-1 ring-slate-300/5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Ver Proyecto
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Editar Proyecto
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="block px-3 py-1 text-sm leading-6 text-red-500"
                    >
                      Eliminar Proyecto
                    </button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </article>

        <article className="flex gap-5 bg-slate-300/5 p-5">
          <figure>
            <img
              src="avatar.png"
              alt="imagen del avatar cliente"
              className="w-20 h-20"
            />
          </figure>

          <div className="">
            <p className="text-slate-300">Nombre Apellido</p>
            <p className="text-sm text-slate-300/70">1021929929</p>
            <p className="flex items-center gap-1 text-slate-300/50">
              <HomeIcon className="w-3 h-3" />
              <span className="text-xs">Cl. 1 #02 - 03</span>
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-1 text-slate-300/50">
                <PhoneIcon className="w-3 h-3" />
                <span className="text-xs">301 3424564</span>
              </p>

              <p className="flex items-center gap-1 text-slate-300/50">
                <EnvelopeIcon className="w-3 h-3" />
                <span className="text-xs">correo@correo.com</span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-x-6">
            <Menu as="div" className="relative flex-none">
              <MenuButton className="-m-2.5 block p-2.5 text-slate-300 hover:text-slate-300/50">
                <span className="sr-only">opciones</span>
                <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-950/90 py-2 shadow-lg ring-1 ring-slate-300/5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Ver Proyecto
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Editar Proyecto
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="block px-3 py-1 text-sm leading-6 text-red-500"
                    >
                      Eliminar Proyecto
                    </button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </article>

        <article className="flex gap-5 bg-slate-300/5 p-5">
          <figure>
            <img
              src="avatar.png"
              alt="imagen del avatar cliente"
              className="w-20 h-20"
            />
          </figure>

          <div className="">
            <p className="text-slate-300">Nombre Apellido</p>
            <p className="text-sm text-slate-300/70">1021929929</p>
            <p className="flex items-center gap-1 text-slate-300/50">
              <HomeIcon className="w-3 h-3" />
              <span className="text-xs">Cl. 1 #02 - 03</span>
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-1 text-slate-300/50">
                <PhoneIcon className="w-3 h-3" />
                <span className="text-xs">301 3424564</span>
              </p>

              <p className="flex items-center gap-1 text-slate-300/50">
                <EnvelopeIcon className="w-3 h-3" />
                <span className="text-xs">correo@correo.com</span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-x-6">
            <Menu as="div" className="relative flex-none">
              <MenuButton className="-m-2.5 block p-2.5 text-slate-300 hover:text-slate-300/50">
                <span className="sr-only">opciones</span>
                <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-950/90 py-2 shadow-lg ring-1 ring-slate-300/5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Ver Proyecto
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Editar Proyecto
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="block px-3 py-1 text-sm leading-6 text-red-500"
                    >
                      Eliminar Proyecto
                    </button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </article>

        <article className="flex gap-5 bg-slate-300/5 p-5">
          <figure>
            <img
              src="avatar.png"
              alt="imagen del avatar cliente"
              className="w-20 h-20"
            />
          </figure>

          <div className="">
            <p className="text-slate-300">Nombre Apellido</p>
            <p className="text-sm text-slate-300/70">1021929929</p>
            <p className="flex items-center gap-1 text-slate-300/50">
              <HomeIcon className="w-3 h-3" />
              <span className="text-xs">Cl. 1 #02 - 03</span>
            </p>
            <div className="flex gap-2">
              <p className="flex items-center gap-1 text-slate-300/50">
                <PhoneIcon className="w-3 h-3" />
                <span className="text-xs">301 3424564</span>
              </p>

              <p className="flex items-center gap-1 text-slate-300/50">
                <EnvelopeIcon className="w-3 h-3" />
                <span className="text-xs">correo@correo.com</span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-x-6">
            <Menu as="div" className="relative flex-none">
              <MenuButton className="-m-2.5 block p-2.5 text-slate-300 hover:text-slate-300/50">
                <span className="sr-only">opciones</span>
                <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-950/90 py-2 shadow-lg ring-1 ring-slate-300/5 focus:outline-none">
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Ver Cliente
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={`/`}
                      className="block px-3 py-1 text-sm leading-6 text-slate-300"
                    >
                      Editar Cliente
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type="button"
                      className="block px-3 py-1 text-sm leading-6 text-red-500"
                    >
                      Eliminar Cliente
                    </button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </article>
      </section>
    </>
  );
}
