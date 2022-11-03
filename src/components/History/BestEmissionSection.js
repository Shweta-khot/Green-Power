import { Typography } from "@mui/material";

function BestEmissionSection(props) {
  const date = new Date(props.bestEmissionData.time).toUTCString();
  const emission = Math.round(props.bestEmissionData.rating * 100) / 100;

  return (
    <Typography variant="h3">
      The best emission in "{props.region}" for the selected time range was{" "}
      {emission} at {date}
    </Typography>
  );
}

export default BestEmissionSection;
