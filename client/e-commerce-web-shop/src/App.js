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
    const [cart, setCart] = useState(cartFromLocalStorage);

    const addToCart = (item) => {
        setCart([...cart, {...item}])
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
            <NavBar amountItemsInCart={amountItemsInCart}/>
            <AppRouter setAmountItemsInCart={setAmountItemsInCart} cart={cart} addToCart={addToCart} setCart={setCart}/>
        </BrowserRouter>
    );
});

export default App;