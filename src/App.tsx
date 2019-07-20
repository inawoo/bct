import React from "react";
import "./App.css";
import RouteController from "./main";
/**for now import all elements here, but later will
 * be moved to a main.tsx cuz of routing
 */

const App: React.FC = () => {
  return <RouteController />;
};

export default App;
