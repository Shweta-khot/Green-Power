import { Box, Typography } from "@mui/material"

export const NoDataAvailable = () =>{
    return (<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
        <Typography>No data available for the selected filter</Typography>
      </Box>)
}
