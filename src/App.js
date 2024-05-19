import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Welcome from "./pages/welcome"

function App() {
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
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
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
