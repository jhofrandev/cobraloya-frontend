import Breadcrumb from "../../components/Breadcrumb";

export default function ClientDetails() {
  return (
    <>
      <Breadcrumb className="mt-2 mb-8">
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-300 mx-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-xs font-medium text-gray-400 md:ms-2 dark:text-gray-400">
              Clientes
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-2 h-2 text-gray-300 mx-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-xs font-medium text-gray-400 md:ms-2 dark:text-gray-400">
              Nombre Apellido
            </span>
          </div>
        </li>
      </Breadcrumb>

      <div className="mx-4 p-4">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/avatar-men.png"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            CC: 12123231
          </span>
        </div>
      </div>

      <h3 className="mx-4 mb-4 text-lg font-semibold">Acerca de</h3>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center gap-4 mx-4 p-4 rounded-t-lg bg-white dark:bg-gray-800">
          <svg
            className="w-6 h-8 text-yellow-400/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76 3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9z" />
          </svg>
          <div className="flex-1">
            <h4 className="text-xs font-normal text-gray-400 truncate dark:text-white">
              Teléfono
            </h4>
            <p className="text-md font-semibold">+57 3014353</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mx-4 p-4 rounded-t-lg bg-white dark:bg-gray-800">
          <svg
            className="w-6 h-8 text-yellow-400/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <div className="flex-1">
            <h4 className="text-xs font-normal text-gray-400 truncate dark:text-white">
              Correo electrónico
            </h4>
            <p className="text-md font-semibold">bonnie.green@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mx-4 p-4 rounded-t-lg bg-white dark:bg-gray-800">
          <svg
            className="w-6 h-8 text-yellow-400/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <div className="flex-1">
            <h4 className="text-xs font-normal text-gray-400 truncate dark:text-white">
              Dirección
            </h4>
            <p className="text-md font-semibold">
              Calle 123, Edificio 456, Piso 3
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
