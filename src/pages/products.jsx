 import { Link , useParams } from "react-router-dom";


const Products = () => {
    const { id } = useParams("id");
    return (
      <div>
        <h2>Products {id}</h2>
        <Link to={"/products/12"}>go to products 12</Link>
      </div>
    );
  };

  export default Products