import React, {useContext} from 'react';
import './ItemsList.css';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";

const ItemsList = observer(() => {
    const {items} = useContext(Context)
    return (
        <Row className="d-flex">
            {items.items.map( item =>
                <ItemCard key={item.id} item={item}/>
            )}
        </Row>
    );
});

export default ItemsList;