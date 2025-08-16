import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer position="top-center" autoClose={4000} />
    </Router>
  );
}
