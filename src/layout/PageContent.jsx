import { Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import About from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
        <ProductDetail />
      </Route>

      <Route path="/product/:productId">
        <ProductDetail />
      </Route>

      <Route exact path="/shop">
        <Shop />
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
    </Switch>
  );
}
