'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

const TanStackQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        {' '}
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </SnackbarProvider>
    </>
  );
};

export default TanStackQueryProvider;
