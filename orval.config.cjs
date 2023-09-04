module.exports = {
  "landing-api": {
    input: "http://localhost:8080/docs/openapi.json",

    output: {
      target: "./src/api",
      client: "react-query",

      override: {
        mutator: {
          path: "./src/api/custom-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
};
