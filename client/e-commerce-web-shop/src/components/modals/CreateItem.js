import React, {useContext, useState} from 'react';
import {Button, Form, Modal, Dropdown, Row, Col} from "react-bootstrap";
import {Context} from "../../index";

const CreateItem = ({show, onHide}) => {
    const {items} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
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
                    ADD A NEW ITEM
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt=2 mb-2">
                        <Dropdown.Toggle>Choose the type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.types.map(type => 
                                <Dropdown.Item key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt=2 mb-2">
                        <Dropdown.Toggle>Choose the brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter the item name"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter the item price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                </Form>
                <hr/>
                <Button
                    variant="dark"
                    onClick={addInfo}
                >
                    Add a new property
                </Button>
                {
                    info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Enter the property name"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Enther the property description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant="dark">Delete property</Button>
                            </Col>
                        </Row>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" size="sm" onClick={onHide}>CLOSE</Button>
                <Button variant="dark" size="sm" onClick={onHide}>ADD NEW ITEM</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateItem;