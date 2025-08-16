import { Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import About from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Register from "../pages/Register"; 

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/shop">
        <Shop />
      </Route>

      <Route path="/product/:id">
        <ProductDetail />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>
    </Switch>
  );
}
