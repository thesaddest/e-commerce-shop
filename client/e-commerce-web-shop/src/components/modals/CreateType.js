import React from 'react';
import {Button, Modal, Form} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
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
                        placeholder="Enter the type name"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={onHide}>CLOSE</Button>
                <Button variant="dark" onClick={onHide}>ADD NEW TYPE</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;