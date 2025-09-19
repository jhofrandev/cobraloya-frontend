export function getStatusStyle(status: string) {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "inArrears":
      return "bg-red-500";
    case "inactive":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
