import React, { useState } from 'react';
import Filter from "./Filter";
import Products from "./Products";
import Cart from "./Cart";
import data from '../data.json';

function Home() {

    const [items, setitems] = useState(data.products);
    const [sort, setSort] = useState("asc");
    const [category, setCategory] = useState("");
    const [cartItems, setCartItems] = useState([]);
    // console.log(item)
    const sortProduts = (event) => {
        setSort(event.target.value)
        // console.log(sort)
        if (sort === "asc") {
            setitems(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)))
        } if (sort === "desc") {
            setitems(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)))
        }
    }

    const catProducts = (e) => {
        if (e.target.value === "") {
            setitems(data.products)
            setCategory(e.target.value)
        }
        else {
            setCategory(e.target.value)
            setitems(data.products.filter((product) => product.availableBrand.indexOf(e.target.value) >= 0))
        }

    }

    const addProducts = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist) {
            setCartItems(
                cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element)
            )
        } else {

            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    const removeProducts = (product) => {
        // console.log(product)
        if (product.qty >= 2) {
            setCartItems(
                cartItems.map((element) => element.id === product.id ? { ...product, qty: product.qty - 1 } : element)
            )
        } else {
            setCartItems(
                cartItems.filter((element) => element.id !== product.id)
            )
        }
    }
    return (
        <div className="container-fluid">
            <header className="bg-secondary py-3">
                <a href="" className="text-light fw-bold px-5">فروشگاه موبایل</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter count={items.length} sortProduts={sortProduts} category={category} catProducts={catProducts} />
                        <Products items={items} addProducts={addProducts} />
                    </div>
                    <div className="sidebar">
                        <Cart cartItems={cartItems} removeProducts={removeProducts} />
                    </div>
                </div>
            </main>
            <footer className="bg-secondary py-5 mt-5 text-center text-light footer">
                طراحی و توسعه شخصی
            </footer>
        </div>
    );
}

export default Home