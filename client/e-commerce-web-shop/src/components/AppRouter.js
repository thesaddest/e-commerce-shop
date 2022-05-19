import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes';
import Shop from '../pages/Shop';
import {Context} from '../index';

const AppRouter = ({setAmountItemsInCart, cartFromLocalStorage}) => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component setAmountItemsInCart={setAmountItemsInCart}/>}/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component setAmountItemsInCart={setAmountItemsInCart} />}/>
            )}
            <Route path='*' element={<Shop/>}/>
        </Routes>
    );
};

export default AppRouter;