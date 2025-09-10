import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ene", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Abr", value: 500 },
  { name: "May", value: 900 },
  { name: "Jun", value: 400 },
];

export default function PaymentTrendCard() {
  return (
    <div className="block p-4 bg-white  rounded-lg shadow-xs hover:bg-gray-100 dark:bg-gray-900  dark:hover:bg-gray-700 dark:shadow-gray-700">
      <h3 className="mb-2 text-sm font-semibold tracking-tight text-gray-300 dark:text-white">
        Tendencia de pagos
      </h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-gray-400">
        $1,200
      </p>
      <p className="text-sm text-gray-300">
        Este mes <span className="text-green-500 font-semibold">↑ 15%</span>
      </p>
      <div className="h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
