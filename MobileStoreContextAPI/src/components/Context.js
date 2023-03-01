import React, { createContext, useState, useEffect } from 'react';
import { DATAPRODUCT } from './data.js'


export const DataContext = createContext();
export const DataProvider = (props) => {
    const [products, setProducts] = useState(DATAPRODUCT);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart") || '[]');
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem("dataCart", JSON.stringify(cart))
    }, [cart])


    const addCart = (id) => {
        const data = products.filter((product) => {
            return product._id === id
        })
        const finaldata = cart.filter((product) => (product._id === id))
        // =========inja mishe az methode every ham estefade kard===================
        // const finaldata = cart.every((product) => {
        //     return (product._id !== id)
        // })
        // console.log(finaldata)

        if (finaldata.length < 1) {
            setCart([...cart, ...data])
        } else {
            alert("قبلا به سبد خرید اضافه کردیش")
        }
        // console.log(cart)
    }

    const amountChange = (amountvalue, product) => {
        if (amountvalue === 'INCREASE') {
            let tempcart = cart.map((item) => {
                if (item._id === product._id) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
            setCart(tempcart)
        } if (amountvalue === 'DECREASE') {
            cart.forEach((item) => {
                if (item.id === product.id) {
                    item.count === 1 ? item.count = 1 : item.count -= 1
                }
            })
            setCart([...cart])

        } if (amountvalue === "REMOVE") {
            if (window.confirm("مطمعنی میخوای حذفش کنی؟")) {
                let tempcart = cart.filter((item) => item._id !== product._id)
                setCart(tempcart)

                // ===============az forEach o splice ham mishe estefade kard=============
                // cart.forEach((item, index) => {
                //     if (item._id === product._id) {
                //         cart.splice(index, 1)
                //     }
                // })
                // setCart([...cart])
            }

        }
    }


    const value = {
        products: [products, setProducts],
        addCart: addCart,
        cart: [cart, setCart],
        amountChange: amountChange,
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}


