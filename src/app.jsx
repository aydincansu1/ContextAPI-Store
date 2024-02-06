import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import CardDetail from "./pages/CardDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/:id" element={<CardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
