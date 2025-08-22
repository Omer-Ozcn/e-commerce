import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/HomePage";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import About from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import CheckoutPayment from "../pages/CheckoutPayment"; // <—
import ProtectedRoute from "./ProtectedRoute";
import Orders from "../pages/Orders";
import Account from "../pages/Account";

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>

      <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
        <ProductDetail />
      </Route>
      <Route path="/product/:productId"><ProductDetail /></Route>
      <Route exact path="/shop"><Shop /></Route>

      <Route path="/cart"><CartPage /></Route>

      <ProtectedRoute path="/checkout/payment">
        <CheckoutPayment />
      </ProtectedRoute>

      <ProtectedRoute exact path="/checkout">
        <Checkout />
      </ProtectedRoute>

      <ProtectedRoute path="/orders">
        <Orders />
      </ProtectedRoute>

      <ProtectedRoute path="/account">
        <Account />
      </ProtectedRoute>

      <Route path="/contact"><Contact /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/blog"><Blog /></Route>

      <Redirect to="/" />
    </Switch>
  );
}
