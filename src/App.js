import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StarterHeader from "./components/StarterHeader";
import {
  Home,
  CategoryDetails,
  CheckoutForm,
  SolarLamp,
  ProductDetails,
} from "./pages";

function App() {
  return (
    <div>

      <StarterHeader />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/list/:id" element={<CategoryDetails />}/>
        <Route path="/solarlamp" element={<SolarLamp />} />
        <Route path="/checkoutform" element={<CheckoutForm />} />
      </Routes>
      <Sidebar />
        <Footer />
    </div>
  );
}

export default App;
