import "./App.css";
import Header from "./components/Header";
import AddNewProduct from "./components/AddNewProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
library.add(fas, fab);

function App() {
  return (
    <main className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNewProduct" element={<AddNewProduct />} />
          <Route path="/productDetail/:ProductId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
