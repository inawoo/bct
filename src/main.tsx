import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/homepage";
import Workspace from "./layout/workspace";
import Projects from "./layout/projects";
import Academy from "./layout/academy";
// import Labs from "./layout/labs";
const RouteController: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/workspaces" component={Workspace} />
      <Route exact path="/projects" component={Projects} />
      {/* <Route exact path="/labs" component={Labs} /> */}
      <Route exact path="/academy" component={Academy} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
};

export default RouteController;
