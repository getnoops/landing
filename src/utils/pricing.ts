export type Service = "microservice" | "database";
export type Interval = "monthly" | "annually";

/** The amount each service item costs in cents */
const serviceItemPriceMap: Record<Service, number> = {
  database: 5000,
  microservice: 5000,
};

export const toWholeAmount = (amount: number) => {
  return amount / 100;
};

export const formatAmount = (amount: number, currency: string): string => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);

  return formattedAmount;
};

export const calculatePlanPrice = (
  microservices: number,
  databases: number,
  interval: Interval,
) => {
  const microservicePrice =
    serviceItemPriceMap.microservice * (microservices ?? 0);
  const databasePrice = serviceItemPriceMap.database * (databases ?? 0);
  const totalPrice = toWholeAmount(microservicePrice + databasePrice);

  if (interval === "annually") {
    const annualPrice = totalPrice * 12;
    // take 10% of the total annual price
    const discount = 0.1 * annualPrice;
    const discountedPrice = annualPrice - discount;
    return Math.ceil(discountedPrice / 50) * 50;
  }

  return totalPrice;
};
