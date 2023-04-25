import { OpenProvider } from './context';
import Stack from './navigators/Stack';
import { TailwindProvider } from 'tailwindcss-react-native';

const App = () => {
  return (
    <OpenProvider>
      <Stack />
    </OpenProvider>
  )
}

export default App