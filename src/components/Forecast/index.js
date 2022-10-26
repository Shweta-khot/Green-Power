/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";

// Add Local Dependencies

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(10),
  margin: theme.spacing(10),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/**
 * Dashboard component.
 * @component
 * @example
 * return (
 *   <Dashboard />
 * )
 * @returns {React.ReactElement} component.
 */
const Forecast = () => {
  // Context hooks.
  // Redux hooks.

  return (
    <Box>
      <Grid>
        <Grid container >
          <Grid item xs={12}>
            <Item>
              <Typography variant="h1">Forecast</Typography>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export component.
export default Forecast;
