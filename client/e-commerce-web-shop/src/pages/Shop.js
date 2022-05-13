import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar/TypeBar";
import BrandBar from "../components/BrandBar/BrandBar";
import ItemsList from "../components/ItemsList/ItemsList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchItems, fetchTypes} from "../http/itemAPI";

const Shop = observer(() => {
    const {items} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => items.setTypes(data))
        fetchBrands().then(data => items.setBrands(data))
        fetchItems().then(data => items.setItems(data.rows))
    }, [])

    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ItemsList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;