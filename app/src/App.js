import './App.css';
import Button from './components/Button';
import { ThemeProvider } from '@emotion/react';
import { theme } from './core/utils/theme/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button label='toto'/>
      </div>
    </ThemeProvider>
  );
}

export default App;
