import Stack from "./src/navigators/Stack";
import { ApolloProvider } from "@apollo/client";
import { Login, Register } from "./src/components";
import { client } from "./src/graphql/apollo_client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CarsDataProvider, OpenProvider, UserProvider } from "./src/context";
// App.js

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <UserProvider>
          <CarsDataProvider>
            <OpenProvider>
              <Login />
              <Stack />
              <Register />
            </OpenProvider>
          </CarsDataProvider>
        </UserProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default App;
