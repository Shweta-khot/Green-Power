/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import leafImage from "../../assets/images/leaf.png";

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
const Dashboard = () => {
  // Context hooks.
  // Redux hooks.

  return (
    <Box>
      <Grid>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <img src={leafImage} alt="car" width="100" height="100" />
              <Typography variant="h1">
                The purpose of Green Power is to lessen carbon emissions and
                practise sustainability.This application assists in selecting
                the best time to charge the deivce based on the time and
                location.
                <br />
                <br />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "right", marginRight: "75px" }}
                >
                  Authors
                </Typography>
                <Typography textAlign={"right"}>
                  Arunoday Chakroborty - BCG GAMMA
                </Typography>
                <Typography textAlign={"right"}>
                  Chaitra Bhat - BCG GAMMA
                </Typography>
                <Typography textAlign={"right"}>
                  Gokulaselvan A - BCG GAMMA
                </Typography>
                <Typography textAlign={"right"}>
                  Pardeep - BCG GAMMA{" "}
                </Typography>
                <Typography textAlign={"right"}>
                  Shweta Khot - BCG GAMMA
                </Typography>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export component.
export default Dashboard;
