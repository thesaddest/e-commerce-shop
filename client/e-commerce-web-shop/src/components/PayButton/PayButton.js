import axios from "axios";
import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {Context} from "../../index";
import cl from './PayButton.module.css'

const PayButton = ({cartItems}) => {
    const user = useContext(Context)
    const url = 'https://pern-e-commerce-shop.herokuapp.com/api'
    const handleCheckout = () => {
        axios.post(`${url}/stripe/create-checkout-session`, {
            cartItems,
            userId: user.userId
        }).then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    return (
        <>
            <Button size="sm" variant="dark" className={cl.btn} onClick={() => handleCheckout()}>CHECKOUT</Button>
        </>
    );
};

export default PayButton;