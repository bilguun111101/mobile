import { Login, Register } from './components';
import { OpenProvider } from './context';
import Stack from './navigators/Stack';
import { TailwindProvider } from 'tailwindcss-react-native';

const App = () => {
  return (
    <OpenProvider>
      <Login />
      <Stack />
      <Register />
    </OpenProvider>
  )
}

export default App