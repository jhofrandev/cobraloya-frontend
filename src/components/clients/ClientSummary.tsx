import { ChevronRightIcon } from "@heroicons/react/24/solid";

type ClientSummaryProps = {
  urlImage?: string;
  name: string;
  status: keyof typeof statusStyles;
};

const statusStyles: { [key: string]: string } = {
  active: "bg-green-500",
  inArrears: "bg-red-500",
  inactive: "bg-gray-500",
};

export default function ClientSummary({
  urlImage,
  name,
  status,
}: ClientSummaryProps) {
  return (
    <div className="flex items-center">
      <div className="shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src={urlImage || "/avatar-men.png"}
          alt={name}
        />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {name}
        </p>
        <p className="flex gap-1 items-center font-semibold text-xs  text-gray-300 truncate dark:text-gray-400">
          <span
            className={`h-2 w-2 rounded-full ${statusStyles[status]} mt-0.5`}
          ></span>
          {status === "active"
            ? "Activo"
            : status === "inArrears"
            ? "En mora"
            : "Inactivo"}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-300 dark:text-white">
        <ChevronRightIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
