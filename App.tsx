import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/pages/home';
// import { Welcome } from './src/pages/welcome';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome /> */}
      <Home />
    </ThemeProvider>
  );
}
