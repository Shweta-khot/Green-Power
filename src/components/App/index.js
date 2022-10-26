/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import { createTheme, ThemeProvider as ThemeProviderNew } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderOld } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Paper } from '@mui/material';

// Add local dependencies.
import themeCodal from '../../themes';
import Site from './Site';

/**
 * App, the highest order wrapper component.
 * @component
 * @example
 * @returns {React.ReactElement} component.
 */
const App = () => {
  const theme = createTheme(themeCodal);

  // Render component.
  return (
      <ThemeProviderOld theme={theme}>
        <ThemeProviderNew theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Paper elevation={0} >
              <Site />
            </Paper>
          </BrowserRouter>
        </ThemeProviderNew>
      </ThemeProviderOld>
  );
};

// Export component
export default App;
