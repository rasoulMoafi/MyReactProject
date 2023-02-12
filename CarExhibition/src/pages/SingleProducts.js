import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProducts = () => {
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id.toString() === productId
  );
  // console.log(product);

  return (
    <div>
      <h3>{product.title}</h3>
      <img src="{product.image}" />
      <h6>{product.description}</h6>

      <Link to="/products">بازگشت به صفحه محصولات</Link>
    </div>
  );
};

export default SingleProducts;
