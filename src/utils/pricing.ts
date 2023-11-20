import getSymbolFromCurrency from "currency-symbol-map";

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

export const formatAmountAsCurrency = (
  amount: number,
  currency: string,
): string => {
  const symbol = getSymbolFromCurrency(currency);
  return `${currency}${symbol ?? ""}${amount}`;
};

/** Returns the total cost of a plan in cents calculated based on the number of services provided */
export const calculatePlanPrice = (
  microservices: number,
  databases: number,
  interval: Interval,
) => {
  const { microservice: microservicePrice, database: databasePrice } =
    serviceItemPriceMap;

  if (interval === "annually") {
    // this is the base cost of the annual pricing plan (10 microservices & 2 databases)
    const baseAnnualCostInCents = 650000; // $6,500.00
    const annualMicroservicePriceInCents = microservicePrice * 12; // $600.00
    const annualDatabasePriceInCents = databasePrice * 12; // $600.00
    // exclude 10 microservices as they are included in the base price
    const microserviceCost =
      (microservices - 10) * annualMicroservicePriceInCents;
    // exclude 2 databases as they are included in the base price
    const databaseCost = (databases - 2) * annualDatabasePriceInCents;
    const annualPlanCost =
      baseAnnualCostInCents + microserviceCost + databaseCost;

    return annualPlanCost;
  }

  return microservicePrice * microservices + databasePrice * databases;
};
