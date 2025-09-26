type CardProps = {
  title: string;
  value: string;
  valueColor: string;
  valueColorDark: string;
  className?: string;
};

export default function Card({
  title,
  value,
  valueColor,
  valueColorDark,
  className,
}: CardProps) {
  return (
    <div
      className={`block p-4 lg:p-8 bg-white  rounded-lg shadow-xs hover:bg-gray-100 dark:bg-gray-950  dark:hover:bg-gray-700 dark:shadow-gray-800 ${className}`}
    >
      <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-300 dark:text-white">
        {title}
      </h5>
      <p className={`font-bold text-3xl ${valueColor} dark:${valueColorDark}`}>
        {value}
      </p>
    </div>
  );
}
