import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Welcome from "./pages/welcome";
import { useEffect, useState } from "react";
import ProductItem from "./pages/productItem";
import AgeCalculator from "./pages/AgeCalaculator";
import {Header , Button} from "./components"


function App(props) {
  const [title, setTitle] = useState("this is the default title");

  useEffect(() => {
    setTimeout(() => {
      setTitle("title updaetd");
    }, 2000);
  }, []);

  return (
    <div className="App">

      <Header />
      

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products title={title} />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/ageCalculator" element={<AgeCalculator />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
