import React, {useContext} from 'react';
import './ItemsList.css';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row, Col} from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";

const ItemsList = observer(() => {
    const {items} = useContext(Context)
    return (
        <Row className="d-flex">
            {items.items.map( item =>
                <Col md={4}>
                    <ItemCard key={item.id} item={item}/>
                </Col>
            )}
        </Row>
    );
});

export default ItemsList;