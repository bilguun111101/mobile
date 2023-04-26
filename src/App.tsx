import Stack from './navigators/Stack';
import { Login, Register } from './components';
import { OpenProvider, RentalProvider, UserProvider } from './context';

const App = () => {
  return (
    <UserProvider>
      <RentalProvider>
        <OpenProvider>
          <Login />
          <Stack />
          <Register />
        </OpenProvider>
      </RentalProvider>
    </UserProvider>
  )
}

export default App