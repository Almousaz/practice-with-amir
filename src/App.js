import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Welcome from "./pages/welcome";
import { useEffect, useState } from "react";
import ProductItem from "./pages/productItem";
function App(props) {
  const [title, setTitle] = useState("this is the default title");

  useEffect(() => {
    setTimeout(() => {
      setTitle("title updaetd");
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header>
        <nav style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/welcome"}>Welcome</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products title={title} />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
