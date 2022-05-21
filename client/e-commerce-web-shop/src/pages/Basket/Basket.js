import React, {useState} from 'react';
import cl from './Basket.module.css'
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";
import {Button} from "react-bootstrap";


const Basket = ({cart, setCart, setAmountItemsInCart}) => {
    let item = cart
    const removeItem = (itemToRemove) => {
        setCart(item = item.filter(item => item !== itemToRemove))
        localStorage.setItem('cart', JSON.stringify(item))
        setAmountItemsInCart(item.length)
    }

    return (
        <div className={cl.mainContainer}>
            <h2>Shopping Cart</h2>
            {item === null ? (
                <div className={cl.cartEmpty}>
                    <p>Your cart is currently empty</p>
                    <div className={cl.startShopping}>
                        <Link to={SHOP_ROUTE}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"

                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (<div>
                    <div className={cl.cartTitles}>
                        <h3 className={cl.itemTitle}>Item</h3>
                        <h3 className={cl.itemPrice}>Price</h3>
                        <h3 className={cl.itemQuantity}>Quantity</h3>
                        <h3 className={cl.itemTotal}>Total</h3>
                    </div>
                    <div className={cl.cartItems}>
                        {item?.map(cartItem =>
                            <div className={cl.cartItem} key={cartItem.id}>
                                <div className={cl.cartProduct}>
                                    <img src={process.env.REACT_APP_API_URL + cartItem.img1} alt={cartItem.name}/>
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.menuTextForTabs1}</p>
                                        <button onClick={() => removeItem(cartItem)}>Remove</button>
                                    </div>
                                </div>
                                <div className={cl.cartItemPrice}>${cartItem.price}</div>
                                <div className={cl.cartItemQuantity}>
                                    <button>-</button>
                                    <div className={cl.itemsInCartCount}>{item.length}</div>
                                    <button>+</button>
                                </div>
                                <div className={cl.cartItemTotalPrice}>
                                    ${cartItem.price * item.length}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cl.cartSummary}>
                        <Button variant='dark' size='sm' className={`${cl.clearCart} ${cl.btn}`}>
                            Clear Cart
                        </Button>
                        <div className={cl.cartCheckout}>
                            <div className={cl.subtotal}>
                                <span>Subtotal</span>
                                <span className={cl.subtotalAmount}></span>
                            </div>
                            <p>Taxes and shipping are calculated at checkout</p>
                            <Button size="sm" variant='dark' className={cl.btn}>CHECKOUT</Button>
                            <div className={cl.continueShopping}>
                                <Link to={SHOP_ROUTE}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"

                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                        />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Basket;