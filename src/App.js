import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryDetails from "./pages/CategoryDetails";
import Checkout from "./pages/Checkout"


function App() {
  return (
    <div>
      <Router>
   
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/list/:id" element={<CategoryDetails />} />
          <Route path= "/checkout" element ={<Checkout/>} />
        </Routes>
        <Sidebar />
        <Footer/>
</Router>
  </div>
  );
}

export default App;
