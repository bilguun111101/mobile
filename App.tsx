import Stack from "./src/navigators/Stack";

import { Login, Register } from "./src/components";
import { client } from "./src/graphql/apollo_client";
import { CarsDataProvider, OpenProvider, UserProvider } from "./src/context";

import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// App.tsx

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};

export default App;
