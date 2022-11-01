import React, { useEffect, useMemo, useState } from "react";
import { Grid, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

import FormSelect from "../Common/Form/FormSelect";
import FormDate from "../Common/Form/FormDate";

import dataService from "../../_shared/services/data.service";

const devices = [
  { name: "Device1 0.7KWH", energy: "0.7", CI: "800" },
  { name: "Device2 0.86KWH", energy: "0.85", CI: "700" },
  {name: "Device3 1KWH", energy: "1", CI: "500"},
];
const regions = ["eastus", "eastus2", "southcentralus", "westus2", "westus3"];

const useStyles = makeStyles({
  options: {
    "&:hover": {
      borderColor: "white",
      background: "grey",
    },
  },

  scroll: {
    padding: "10px",
  },
});

export default function Filters({
  start,
  hours,
  hoursSetter,
  device,
  deviceSetter,
  region,
  regionSetter,
}) {
  const classes = useStyles();

  return (
    <div className={classes.scroll}>
      <Grid container spacing={2} alignContent="center" textAlign="center">
      <Grid xs={12} md={3} marginBottom={2}>
          <h1>Time</h1>
          <h3>{start.toLocaleString()}</h3>
        </Grid>
        <Grid xs={12} md={3} marginBottom={2}>
          <FormSelect
            label="Region"
            menuId="region_id"
            value={region}
            setter={regionSetter}
          >
            {regions.map((region, index) => {
              return <MenuItem value={region}>{region}</MenuItem>;
            })}
          </FormSelect>
        </Grid>
        {/* <Grid xs={12} md={3} marginBottom={2}>
          <FormDate
            label="From Time"
            value={startTime}
            setter={startSetter}
            disablePast
            disabled
          />
        </Grid> */}
        <Grid xs={12} md={3} marginBottom={2}>
          <FormSelect
            label="Hours"
            menuId="hours_id"
            setter={hoursSetter}
            value={hours}
          >
            {Array.from(Array(23).keys()).map((hour, index) => {
              return <MenuItem value={index + 1}>{hour + 1}</MenuItem>;
            })}
          </FormSelect>
        </Grid>
        <Grid xs={12} md={3} marginBottom={2}>
          <FormSelect
            label="Device"
            menuId="device_id"
            value={device}
            setter={deviceSetter}
          >
            {devices.map((device, index) => {
              return <MenuItem value={device.name}>{device.name}</MenuItem>;
            })}
          </FormSelect>
        </Grid>
      </Grid>
    </div>
  );
}
