import Card from "../components/Card";
import PaymentTrendCard from "../components/chart/PaymentTrendCard";

export default function DashboardView() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <article className="flex flax-row gap-4">
          <Card
            title="Préstamos activos"
            value="12"
            valueColor="text-gray-900"
            valueColorDark="text-gray-400"
            className="basis-1/2"
          />
          <Card
            title="Préstamos en mora"
            value="2"
            valueColor="text-red-500"
            valueColorDark="text-red-500"
            className="basis-1/2"
          />
        </article>

        <article>
          <Card
            title="Ganancias totales"
            value="$15,000"
            valueColor="text-green-500"
            valueColorDark="text-green-500"
          />
        </article>
        <article>
          <PaymentTrendCard />
        </article>
      </div>
    </>
  );
}
