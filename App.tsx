/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Navigation from '@navigation/Navigation';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'all',
      enabled: true,
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
