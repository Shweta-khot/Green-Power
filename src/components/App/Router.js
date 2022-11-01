/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

// Add third-party dependencies.
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

// Add local dependencies.
import Dashboard from "../Dashboard";
import History from "../History";
import Forecast from "../Forecast";

/**
 * Router component.
 * @component
 * @example
 * return (
 *   <Router />
 * )
 * @returns {React.ReactElement} component.
 */

const Router = () => {
  // Render component.
  return (
    <Switch>
      <Route path="/home" exact component={Dashboard} />
      <Route path="/history" exact component={History} />
      <Route path="/forecast" exact component={Forecast} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

// Export component.
export default Router;
