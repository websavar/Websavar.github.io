import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { Layout } from './components';

const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <Layout />
          </QueryClientProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
