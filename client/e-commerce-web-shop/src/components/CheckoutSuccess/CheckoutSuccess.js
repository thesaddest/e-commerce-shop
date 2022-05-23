import React, {useEffect} from 'react';
import cl from './CheckoutSuccess.module.css';
import {BsBagCheckFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";
import {Button} from "react-bootstrap";
import {runFireWorks} from "../../utils/utils";

const CheckoutSuccess = ({clearCart}) => {
    useEffect(() => {
        clearCart()
        runFireWorks()
    }, [])

    return (
        <div className={cl.mainContainer}>
            <div className={cl.success}>
                <p className={cl.icon}><BsBagCheckFill/></p>
                <h2>Thank you for your order!</h2>
                <p className={cl.emailMsg}>Check your email inbox for the receipt.</p>
                <p className={cl.description}>If you have any questions, please email
                    <a className={cl.email} href="mailto:order@example.com">
                        order@example.com
                    </a>
                </p>
                <Link to={SHOP_ROUTE}>
                    <Button
                        variant='dark'
                        size='sm'
                    >
                        Continue Shopping
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default CheckoutSuccess;