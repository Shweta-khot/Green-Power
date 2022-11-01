/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import axios from "axios";

import Filters from "./Filters";
import HistoricalData from "./HistoricalData";
import BestEmissionSection from "./BestEmissionSection";
import { useEffect } from "react";

// Add Local Dependencies

/**
 * Dashboard component.
 * @component
 * @example
 * return (
 *   <Dashboard />
 * )
 * @returns {React.ReactElement} component.
 */

const ChartContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const ActualForecast = () => {
  // local state
  const [chartData, setChartData] = useState([]);
  const [region, setRegion] = useState("eastus");
  const [start, setStart] = useState(new Date().getTime() - 6 * 60 * 60 * 1000);
  const [end, setEnd] = useState(new Date());
  const [bestEmissionData, setBestEmissionData] = useState();

  console.log(new Date().toUTCString());

  useEffect(() => {
    const newStartTime = new Date(start).toISOString();
    const newEndTime = new Date(end).toISOString();

    axios
      .get(
        `https://carbon-aware-api.azurewebsites.net/emissions/bylocations?location=${region}&time=${newStartTime}&toTime=${newEndTime}`
      )
      .then((res) => setChartData(res.data))
      .catch((err) => console.error(err));

    axios
      .get(
        `https://carbon-aware-api.azurewebsites.net/emissions/bylocations/best?location=${region}&time=${newStartTime}&toTime=${newEndTime}`
      )
      .then((res) => setBestEmissionData(res.data[0]))
      .catch((err) => console.error(err));
  }, [region, start, end]);

  return (
    <Box>
      <Grid container mt={0.2} sx={{ backgroundColor: "#f5F5F5" }}>
        <Grid xs={12}>
          <Item>
            <Filters
              region={region}
              regionSetter={setRegion}
              startTime={start}
              startSetter={setStart}
              endTime={end}
              endSetter={setEnd}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <ChartContainer
            justifycontent="center"
            alignitems="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontStyle: "normal",
                color: "#333B4E",
                marginBottom: "10px",
              }}
            >
              Carbon Intensity
            </Typography>
            <HistoricalData chartData={chartData} />
          </ChartContainer>
          {bestEmissionData && (
            <ChartContainer>
              <BestEmissionSection bestEmissionData={bestEmissionData} />
            </ChartContainer>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

// Export component.
export default ActualForecast;
