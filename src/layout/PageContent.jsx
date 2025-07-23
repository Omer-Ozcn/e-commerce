import { Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage";


export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}