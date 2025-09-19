import { formatCurrency, getStatusStyle } from "../../utils/utils";

type LoanSummaryProps = {
  urlImage?: string;
  name: string;
  amount: number;
  status: string;
};

export default function LoanSummary({
  urlImage,
  name,
  amount,
  status,
}: LoanSummaryProps) {
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
        <p className="text-sm font-medium text-gray-300 truncate dark:text-white">
          {formatCurrency(amount)}
        </p>
      </div>
      <span
        className={`inline-flex items-center ${getStatusStyle(
          status
        )} text-white text-xs px-2.5 py-0.5 rounded-full`}
      >
        <span
          className={`w-2 h-2 me-1 ${
            status === "active"
              ? "bg-green-300"
              : status === "inArrears"
              ? "bg-red-300"
              : "bg-gray-300"
          } rounded-full`}
        ></span>
        {status === "active"
          ? "Activo"
          : status === "inArrears"
          ? "En mora"
          : "Pagado"}
      </span>
    </div>
  );
}
