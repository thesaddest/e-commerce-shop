import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import './App.css'
import Loader from "./components/Loader/Loader";
import {fetchBrands, fetchItems, fetchTypes} from "./http/itemAPI";

const App = observer(() => {
    const {items} = useContext(Context)
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true);
    const [amountItemsInCart, setAmountItemsInCart] = useState("")

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
    let [cart, setCart] = useState(cartFromLocalStorage);

    const setQuantity = (product) => {
        const newCart = [...cart]
        newCart.find(
            (item) => item.name === product.name
        ).quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart)
        if(product.quantity <= 0) {
            removeItem(product)
        }
    }

    const getTotalItemAmountInCart = () => {
        return cart.reduce((sum, {quantity}) => sum + quantity, 0)
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
        setAmountItemsInCart('0')
    }

    const addToCart = (item) => {
        let newCart = [...cart]
        let itemInCart = newCart.find(product => item.name === product.name)
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...item,
                quantity: 1
            };
            newCart.push(itemInCart)
        }
        setCart(newCart)
    };


    const removeItem = (itemToRemove) => {
        setCart(cart = cart.filter(item => item !== itemToRemove))
        localStorage.setItem('cart', JSON.stringify(cart))
        setAmountItemsInCart(cart.length)
    }

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            fetchTypes().then(data => items.setTypes(data))
            fetchBrands().then(data => items.setBrands(data))
            fetchItems().then(data => items.setItems(data.rows))
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <NavBar amountItemsInCart={amountItemsInCart} getTotalItemAmountInCart={getTotalItemAmountInCart}/>
            <AppRouter
                setQuantity={setQuantity}
                clearCart={clearCart}
                setAmountItemsInCart={setAmountItemsInCart}
                cart={cart}
                addToCart={addToCart}
                removeItem={removeItem}/>
        </BrowserRouter>
    );
});

export default App;