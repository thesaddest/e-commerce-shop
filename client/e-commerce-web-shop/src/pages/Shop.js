import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar/TypeBar";
import BrandBar from "../components/BrandBar/BrandBar";
import ItemsList from "../components/ItemsList/ItemsList";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    return (
        <Container>
            <Row className="mt-4">
                <Col  md={3} style={{paddingTop: 60}}>
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