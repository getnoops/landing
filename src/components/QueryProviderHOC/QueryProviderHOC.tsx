import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// This is needed for React Query to work properly
// see https://stackoverflow.com/a/76235865

const QueryProviderHOC = (Component: React.FC) => {
  const ReturnedComponent = () => (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );

  return ReturnedComponent;
};

export default QueryProviderHOC;
