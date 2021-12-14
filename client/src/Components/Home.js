import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import Basket from "./Basket";
import data from "../data";
import { useState } from 'react';
import '../custom.css';
import {useLocation} from 'react-router-dom';

function Home() {
    const location = useLocation();
    // const email = location.state.email;
    // console.log(location.state.email);


    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
        }
    };

    return (    
        <>
        <div className="body">
            <div className="row">
                <Main products={products} email={sessionStorage.email} onAdd={onAdd}></Main>
                <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                // email={email}
                ></Basket>
            </div>
        </div>
        </>
    )
}

export default Home;