import { defineConfig } from "orval";

export default defineConfig({
	authGalaxy: {
		input: {
			target: "http://localhost:8080/docs/openapi.json",
		},
		output: {
			mode: "single",
			target: "./src/api/authGalaxy.ts",
			client: "react-query",
			override: {
				mutator: {
					path: "./src/api/custom-instance.ts",
					name: "customInstance",
				},
			},
		},
	},
});
