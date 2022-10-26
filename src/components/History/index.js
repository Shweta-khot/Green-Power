/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import React, {useState} from "react";
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";

import Filters from "./Filters";
import HistoricalData from "./HistoricalData";

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

const data=[
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:35:00+00:00",
    "rating": 555.65065325,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:30:00+00:00",
    "rating": 555.65065325,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:25:00+00:00",
    "rating": 555.65065325,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:20:00+00:00",
    "rating": 556.10424562,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:15:00+00:00",
    "rating": 556.10424562,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:10:00+00:00",
    "rating": 557.9186151,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:05:00+00:00",
    "rating": 560.64016932,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-26T00:00:00+00:00",
    "rating": 560.18657695,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:55:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:50:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:45:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:40:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:35:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:30:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:25:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:20:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:15:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:10:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:05:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T23:00:00+00:00",
    "rating": 539.7749203,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T22:55:00+00:00",
    "rating": 540.22851267,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T22:50:00+00:00",
    "rating": 540.22851267,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T22:45:00+00:00",
    "rating": 540.22851267,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T22:40:00+00:00",
    "rating": 540.22851267,
    "duration": "00:05:00"
  },
  {
    "location": "PJM_ROANOKE",
    "time": "2022-10-25T22:35:00+00:00",
    "rating": 540.22851267,
    "duration": "00:05:00"
  }
]
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
  return (
    <Box>
      <Grid container  mt={0.2} sx={{ backgroundColor: "#f5F5F5" }}>
        <Grid xs={12}>
          <Item>
            <Filters />
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
            <HistoricalData chartData={data}/>
          </ChartContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

// Export component.
export default ActualForecast;
