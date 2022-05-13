import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import {createType} from "../../http/itemAPI";

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
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
                    ADD A NEW TYPE
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Enter the type name"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" size="sm" onClick={onHide}>CLOSE</Button>
                <Button variant="dark" size="sm" onClick={addType}>ADD NEW TYPE</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;