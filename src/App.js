import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryDetails from "./pages/CategoryDetails";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path ="/categorylist/:id" element={<CategoryDetails/>}/>
        </Routes>
        <Sidebar />
        <Footer/>
</Router>
  </div>
  );
}

export default App;
