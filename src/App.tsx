import Stack from './navigators/Stack';
import {Login, Register} from './components';
import {OpenProvider, RentalProvider, UserProvider} from './context';
import {ApolloProvider} from '@apollo/client';
import {client} from './server/apollo_client';

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
