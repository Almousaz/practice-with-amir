 import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import api from "../service/api";

const Products = () => {

  const {id} = useParams();
  const [posts , setPosts] = useState([]);
  

  useEffect(() =>{

    api.get("posts").then((response) => {
      setPosts(response.data);
    });

      // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      //   setPosts(response.data)
      // })
  } ,[]);




    return(
      <div>
         <h2>Posts</h2>
         {posts.map((item , index)=>{
          return(
            <div key={index} style={{textAlign:"left" , display:"flex" , marginBottom:"10px", flexDirection:"column"}}  >
              <Link to={`/products/${item.id}`}>{item.id} {item.title}</Link>
            <span>{item.body}</span>
            </div>
          )
         })}

      </div>
    );
  };




  export default Products