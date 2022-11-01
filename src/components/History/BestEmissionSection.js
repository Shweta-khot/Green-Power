import { Typography } from "@mui/material";

function BestEmissionSection(props) {
  const date = new Date(props.bestEmissionData.time).toUTCString();
  const emission = Math.round(props.bestEmissionData.rating * 100) / 100;
  const durationArr = props.bestEmissionData.duration?.split(":");
  const durationStr = durationArr
    ? `${durationArr[0]}hr ${durationArr[1]}min ${durationArr[2]}s`
    : null;

  return (
    <Typography variant="h3">
      The best emission in {props.bestEmissionData.location} for the selected
      time range was {emission} at {date} for {durationStr}
    </Typography>
  );
}

export default BestEmissionSection;
