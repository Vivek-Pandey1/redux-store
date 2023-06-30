import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar";
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import Productlist from "./components/Productlist";
import ProductDetails from "./components/ProductDetails";
function App() {
  // const product = useSelector((state) => state.allProducts.products);

  const NotFound = () => {
    return (
      <div className="container mt-3 display-2">
        Error 404  "Page not found" 
      </div>
    );
  };
  // console.log(product);
  return (
    <div className="">
          <Header />
   
       <Router>
      <Routes>
        <Route path="/" element={<Productlist />} />
        <Route path="/redux-store" element={<Productlist />} />
        <Route path="/product/:productID" element={<ProductDetails/>} />
        <Route path="/redux-store/product/:productID" element={<ProductDetails/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
