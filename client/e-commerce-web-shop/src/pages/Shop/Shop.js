import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import ItemsList from "../../components/ItemsList/ItemsList";
import {observer} from "mobx-react-lite";
import Pages from "../../components/Pages/Pages";
import {fetchBrands, fetchItems, fetchTypes} from "../../http/itemAPI";
import {Context} from "../../index";
import cl from './Shop.module.css'

const Shop = observer(({setAmountItemsInCart, cart}) => {

    const {items} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => items.setTypes(data))
        fetchBrands().then(data => items.setBrands(data))
        fetchItems(null, null, 1, 3).then(data => {
            items.setItems(data.rows)
            items.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(items.selectedType.id, items.selectedBrand.id, items.page, 3).then(data => {
            items.setItems(data.rows)
            items.setTotalCount(data.count)
        })
    }, [items.page, items.selectedType, items.selectedBrand])
    return (
        <Container className={cl.shopContainer}>
            <Row className="mt-4">
                <Col  md={3} style={{paddingTop: 60}}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ItemsList/>
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;