import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import './TypeBar.css'

const TypeBar = observer(() => {
    const {items} = useContext(Context)
    return (
        <ListGroup>
            <h1>CATEGORIES</h1>
            {items.types.map(type =>
                <ListGroup.Item
                    active={type.id === items.selectedType.id}
                    onClick={() => items.setSelectedType(type)}
                    className='list-group-item'
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;