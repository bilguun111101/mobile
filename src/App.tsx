import Bottom from './navigators/Bottom';
import Stack from './navigators/Stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <TailwindProvider>
      <Stack />
    </TailwindProvider>
  )
}

export default App