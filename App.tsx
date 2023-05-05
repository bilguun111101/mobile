import Stack from "./src/navigators/Stack";
import { Login, Register } from "./src/components";
import { OpenProvider, RentalProvider, UserProvider } from "./src/context";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/server/apollo_client";
// App.js

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <RentalProvider>
          <OpenProvider>
            <Login />
            <Stack />
            <Register />
          </OpenProvider>
        </RentalProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
