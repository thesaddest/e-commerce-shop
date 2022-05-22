import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import cl from './Admin.module.css'
import CreateBrand from "../../components/Modals/CreateBrand";
import CreateType from "../../components/Modals/CreateType";
import CreateItem from "../../components/Modals/CreateItem";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(false);


    return (
        <Container className={cl.container}>
            <Button
                variant={'dark'}
                className="mt-2"
                onClick={() => setTypeVisible(true)}
            >
                ADD TYPE
            </Button>
            <Button
                variant={'dark'}
                className="mt-2"
                onClick={() => setBrandVisible(true)}
            >
                ADD BRAND
            </Button>
            <Button
                disabled
                variant={'dark'}
                className="mt-2"
                onClick={() => setItemVisible(true)}
            >
                ADD ITEM (currently working on it)
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
        </Container>
    );
};

export default Admin;