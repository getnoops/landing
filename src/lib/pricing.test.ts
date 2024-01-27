import { calculatePlanPrice } from "./pricing";

describe("Pricing Utilities", () => {
	describe("calculatePlanPrice", () => {
		test("should return $600 for the base pro plan when monthly billing is selected", () => {
			const microservices = 10;
			const databases = 2;
			const price = calculatePlanPrice(microservices, databases, "monthly");
			expect(price).toEqual(600);
		});
		test("should return $6500 for the base pro plan when annual billing is selected", () => {
			const microservices = 10;
			const databases = 2;
			const price = calculatePlanPrice(microservices, databases, "annually");
			expect(price).toEqual(6500);
		});
		test("should return $60,500 for an annually billed pro plan with 100 services and 2 databases", () => {
			const microservices = 100;
			const databases = 2;
			const price = calculatePlanPrice(microservices, databases, "annually");
			expect(price).toEqual(60500);
		});
	});
});
