import Stack from "./src/navigators/Stack";
import { Login, Register } from "./src/components";
import { CarsDataProvider, OpenProvider, UserProvider } from "./src/context";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/graphql/apollo_client";
// App.js

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        {/* <RentalProvider> */}
        <CarsDataProvider>
          <OpenProvider>
            <Login />
            <Stack />
            <Register />
          </OpenProvider>
        </CarsDataProvider>
        {/* </RentalProvider> */}
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
