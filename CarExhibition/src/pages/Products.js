import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// const url = "https://dummyjson.com/products";
import products from "../data";

const Products = () => {
  // const [pro, setPro] = useState([]);
  // console.log(pro);
  // console.log(pro.products);
  //   console.log(typeof pro.products);
  //   const x = pro.products;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setPro(result);
  //     });
  // }, []);

  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const pro = await response.json();
  //   setPro(pro);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    // <div>1</div>
    <ul className="products">
      {products.map((product) => {
        const { id, title, images } = product;
        return (
            <>
              <li key={id}>
                <h6>{title}</h6>
                <img src={images[0]} />
                <Link to={`/products/${id}`} className="product-link">
                  توضیحات محصول
                </Link>
              </li>
            </>
        );
      })}
    </ul>
  );
};

export default Products;
