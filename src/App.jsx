import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  return (
    <Router>
      <Header />
      <PageContent />
      <Footer />
    </Router>
  );
}

export default App;