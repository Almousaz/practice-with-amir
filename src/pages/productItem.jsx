import { useEffect, useState } from "react";
import {  Link , useParams } from "react-router-dom";
import api from "../service/api";
import axios from "axios";


const ProductItem = () => {
  const {id} = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    api.get(`posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Posts id is {id}</h2>
      {post && (
        <div style={{textAlign:"left"}}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
