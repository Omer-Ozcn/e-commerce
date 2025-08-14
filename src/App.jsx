import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function AppContent() {
  const location = useLocation();
  
  const hideLayout = location.pathname === "/contact";

  return (
    <>
      {!hideLayout && <Header />}
      <PageContent />
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
