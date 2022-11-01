/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-10-12
 */

 import * as React from 'react';
 import TextField from '@mui/material/TextField';
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
 
 export default function FormDate(props) {
 
   return (
     <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DateTimePicker
         renderInput={(props) => <TextField {...props} />}
         label={props.label}
         value={props.value}
         onChange={(newValue) => {
          var date = new Date(newValue)
          console.log(date.toISOString())
           props.setter(newValue);
         }}
         sx={{marginTop: "50px"}}
       />
     </LocalizationProvider>
   );
 }
 