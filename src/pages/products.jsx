 import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";


const Products = (props) => {

  const {onCounterChagne , title} = props
  const [counter , setCounter] = useState(0);



 
  

  useEffect(() => {
    console.log("component rendered");
    return() => {
      console.log("component remove");
    }
   } , [])

   useEffect(() => {
    console.log("counter update with number" , counter)
    onCounterChagne(counter);
   } , [counter])

   const handleCounterClick = () => {
     setCounter(counter + 1)
   }

   useEffect(()=>{
    console.log("parent just updated with value" , title)
   } , [title])

    return (
      <div>
        <h2>Products{counter}</h2>
        <button onClick={handleCounterClick} >add to counter</button>
        <Link to={"/products/12"}>go to products 12</Link>
      </div>
    );
  };

  export default Products