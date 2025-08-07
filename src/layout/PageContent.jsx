import { Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Shop from "../pages/Shop"; 

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/shop"> 
        <Shop />
      </Route>
    </Switch>
  );
}
