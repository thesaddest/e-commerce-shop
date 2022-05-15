import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import cl from './ItemCard.module.css';
import star from '../../assets/rating.svg';
import {useNavigate} from "react-router-dom";
import {ITEM_ROUTE} from "../../utils/consts";

const ItemCard = ({item}) => {
    const navigate = useNavigate();
    return (
        <Col md="4" className="mt-4" onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}>
            <Card className={cl.itemCard}>
                <Image src={process.env.REACT_APP_API_URL + item.img1}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{item.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default ItemCard;