import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components';

const theme = createTheme({
  palette: {
    primary: { main: "rgb(35, 231, 165)" },
    secondary: { main: "rgb(246, 174, 30)" }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
