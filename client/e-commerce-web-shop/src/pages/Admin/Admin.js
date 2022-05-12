import React from 'react';
import {Button, Container} from "react-bootstrap";
import cl from './Admin.module.css'
import CreateBrand from "../../components/modals/CreateBrand";
import CreateType from "../../components/modals/CreateType";
import CreateItem from "../../components/modals/CreateItem";

const Admin = () => {
    return (
        <Container className={cl.container}>
            <Button variant={'dark'} className="mt-2">ADD TYPE</Button>
            <Button variant={'dark'} className="mt-2">ADD BRAND</Button>
            <Button variant={'dark'} className="mt-2">ADD ITEM</Button>
            <CreateType show={true}/>
            <CreateBrand/>
            <CreateItem/>
        </Container>
    );
};

export default Admin;