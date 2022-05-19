import React from 'react';
import Loader from "../components/Loader/Loader";


const Basket = () => {
    const  [item] = JSON.parse(localStorage.getItem('cart'))
        console.log(item)
    return (
        <Loader/>
    );
};

export default Basket;