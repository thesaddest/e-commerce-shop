import React from 'react';
import {Button} from "react-bootstrap";
import cl from './ItemCard.module.css';
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../../utils/consts";

const ItemCard = ({item}) => {
    const navigate = useNavigate();
    return (
        <section>
            <div className={cl.cardContainer} onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}>
                <div className={cl.card}>
                    <div className={cl.imageContainer}>
                        <img src={process.env.REACT_APP_API_URL + item.img1}/>
                        <h2>{item.name}</h2>
                    </div>
                    <div className={cl.cardContent}>
                        <div className={cl.itemPrice}>
                            <span>{'PRICE: ' + item.price + ' $'}</span>
                        </div>
                        <Button
                            size="sm"
                            variant="dark"
                            className="align-self-center mt-2"
                            style={{
                                paddingLeft: 80,
                                paddingRight: 80,
                                paddingTop: 14,
                                paddingBottom: 14,
                                marginTop: 20
                            }}
                        >
                            VIEW MORE
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ItemCard;