import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row, ListGroup} from "react-bootstrap";
import cl from './BrandBar.module.css';

const BrandBar = observer(() => {
    const {items} = useContext(Context)
    return (
        <Row className="d-flex justify-content-evenly" className={cl.rowContainer} >
            {items.brands.map(brand =>
                <ListGroup.Item
                    onClick={() => items.setSelectedBrand(brand)}
                    active={brand.id === items.selectedBrand.id}
                    key={brand.id}
                    className={cl.card}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </Row>
    );
});

export default BrandBar;