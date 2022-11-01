/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import axios from "axios";

import Filters from "./Filters";
import grass from "../../assets/images/grass.jpg"

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
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  marginTop: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  height: "100%",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

const devices = [
  { name: "Device1 0.7KWH", energy: "0.7", CI: "800" },
  { name: "Device2 0.86KWH", energy: "0.85", CI: "700" },
  { name: "Device3 1KWH", energy: "1", CI: "500" },
];

const Forecast = () => {
  // local state
  const [region, setRegion] = useState("eastus");
  const [start, setStart] = useState(new Date());
  const [hours, setHours] = useState(1);
  const [device, setDevice] = useState("Device1 0.7KWH");
  const [deviceData, setDeviceData] = useState({});
  const [forecastData, setForecastData] = useState(0);
  const [bestTime, setBestTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setStart(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  useEffect(() => {
    const newStartTime = new Date(
      start.getTime() + 1 * 5 * 60 * 1000
    ).toISOString();
    const newEndTime = new Date(
      start.getTime() + hours * 60 * 60 * 1000
    ).toISOString();

    const deviceData = devices.filter((d) => d.name === device)[0];
    setDeviceData(deviceData);
    const carbonFootprint = deviceData.CI * deviceData.energy;

    axios
      .get(
        `https://carbon-aware-api.azurewebsites.net/emissions/forecasts/current?location=${region}&dataStartAt=${newStartTime}&dataEndAt=${newEndTime}`
      )
      .then((res) => setForecastData(res.data[0].optimalDataPoints[0]))
      .catch((err) => console.error(err));
  }, [hours, region, device]);

  useEffect(() => {
    if (forecastData.value * deviceData.energy <= deviceData.CI * deviceData.energy) {
      setBestTime(
        new Date(forecastData.timestamp).toLocaleString(undefined, {
          timeZone: "Asia/Kolkata",
        })
      );
    } else {
      setBestTime(`Can't find best time in next ${hours} hours`);
    }
  }, [forecastData]);

  return (
    <Box sx={{margin: "10px"}}>
      <Grid container mt={10}>
        <Grid xs={12}>
          <Item>
            <Filters
              start={start}
              region={region}
              regionSetter={setRegion}
              hours={hours}
              hoursSetter={setHours}
              device={device}
              deviceSetter={setDevice}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <ChartContainer
            justifycontent="center"
            alignitems="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Item sx={{ minWidth: "500px", display: "inline-block" }}>
              <h2>Device: {deviceData.name}</h2>
              <h2>Carbon Footprint: {deviceData.energy * deviceData.CI}</h2>
            </Item>
            <Item sx={{ minWidth: "500px", float: "right" }}>
              <h2>Best Time: {bestTime}</h2>
            </Item>
          </ChartContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export component.
export default Forecast;
