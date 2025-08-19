import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initAuth } from "./store/actions/userActions";
import { fetchCategoriesIfNeeded } from "./store/thunks/categoryThunks";
import { loadCartFromStorage } from "./store/thunks/cartThunks"; // ⬅️ eklendi

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuth());
    dispatch(fetchCategoriesIfNeeded());
    dispatch(loadCartFromStorage()); // ⬅️ sepeti localStorage'dan yükle
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <PageContent />
        <Footer />
      </Router>
      <ToastContainer position="top-center" autoClose={3000} />
    </QueryClientProvider>
  );
}

export default App;
