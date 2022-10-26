import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormSelect(props) {
 

  return (
    <Box>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={props.label}
        >
          {props.children}
        </Select>
      </FormControl>
    </Box>
  );
}
