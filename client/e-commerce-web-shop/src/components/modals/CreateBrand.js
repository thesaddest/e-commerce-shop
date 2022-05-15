import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/itemAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value.toUpperCase()}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD A NEW BRAND
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Enter the brand name"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" size="sm" onClick={onHide}>CLOSE</Button>
                <Button variant="dark" size="sm" onClick={addBrand}>ADD NEW BRAND</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;