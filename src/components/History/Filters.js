import React, { useEffect, useMemo, useState } from "react";
import { Grid, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

import FormSelect from "../Common/Form/FormSelect";
import FormDate from "../Common/Form/FormDate";

import dataService from "../../_shared/services/data.service";

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

export default function Filters() {
  const classes = useStyles();
  const [start, setStart] = useState(new Date ().getTime () - (24 * 60 * 60 * 1000))
  const [end, setEnd] = useState(new Date ())

  return (
    <div className={classes.scroll}>
      <Grid container spacing={2} alignContent="center" textAlign="center">
        <Grid xs={12} md={4} marginBottom={2}>
          <FormSelect label="Region" menuId="region_id">
            <MenuItem value={0}>eastus</MenuItem>
          </FormSelect>
        </Grid>
        <Grid xs={12} md={4} marginBottom={2}>
          <FormDate label="From Time" value={start} setter={setStart}/>
        </Grid>
        <Grid xs={12} md={4}>
          <FormDate label="To Time" value={end} setter={setEnd}/>
        </Grid>
      </Grid>
    </div>
  );
}
