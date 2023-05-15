import './App.css';
import { ThemeProvider } from '@emotion/react';
import Button from './components/Button';
import { theme } from './core/utils/theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Button label="toto" />
    </div>
  </ThemeProvider>
);

export default App;
