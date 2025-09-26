import Card from "../components/Card";
import PaymentTrendCard from "../components/chart/PaymentTrendCard";

export default function DashboardView() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 xl:grid-cols-3 gap-2 sm:gap-4 xl:gap-8  py-4 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-0">
        <article className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-1 gap-2 sm:gap-4 xl:gap-8">
          <Card
            title="Préstamos activos"
            value="12"
            valueColor="text-gray-900"
            valueColorDark="text-gray-400"
            className="xl:row-auto"
          />
          <Card
            title="Préstamos en mora"
            value="2"
            valueColor="text-red-500"
            valueColorDark="text-red-500"
            className="xl:row-auto"
          />
          <Card
            title="Ganancias totales"
            value="$15,000"
            valueColor="text-green-500"
            valueColorDark="text-green-500"
            className="xs:col-span-2 sm:col-span-1 xl:row-auto"
          />
        </article>
        <article className="xl:col-span-2">
          <PaymentTrendCard />
        </article>
      </div>
    </>
  );
}
