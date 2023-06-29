import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar";
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import Productlist from "./components/Productlist";
function App() {
  const product = useSelector((state) => state.allProducts.products);

  const NotFound = () => {
    return (
      <div className="container mt-3 display-2">
        Error 404  "Page not found" 
      </div>
    );
  };
  console.log(product);
  return (
    <div className="text-danger">
          <Header />
   
       <Router>
      <Routes>
        <Route path="/" element={<Productlist />} />
        <Route path="/product/:productID" element={"to be added"} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
