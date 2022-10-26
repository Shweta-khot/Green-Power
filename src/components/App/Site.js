/* eslint-disable no-unused-vars */
/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Add local dependencies.
import Header from "./Header";
import Router from "./Router";

/**
 * Site component.
 * @component
 * @example
 * return (
 *   <Site />
 * )
 * @returns {React.ReactElement} component.
 */
const useStyles = makeStyles((theme) => {
  return {
    "@global": {
      "*::-webkit-scrollbar": {
        width: 7,
        height: 7,
      },

      /* Track */
      "*::-webkit-scrollbar-track": {
        boxShadow: `inset 0 0 5px ${theme.palette.grey.main}`,
        borderRadius: 5,
      },

      /* Handle */
      "*::-webkit-scrollbar-thumb": {
        background: `${theme.palette.grey.main}`,
        borderRadius: 7,
      },
    },
  };
});

const Site = () => {
  // Themes.
  const classes = useStyles();
  // Render component.
  return (
    <Box
      className={classes.root}
    >
      <Header />
      <Router />
    </Box>
  );
};

// Export component.
export default Site;
