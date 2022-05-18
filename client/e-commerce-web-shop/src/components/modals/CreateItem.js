import React, {useContext, useState} from 'react';
import {Button, Form, Modal, Dropdown, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createItem} from "../../http/itemAPI";

const CreateItem = observer(({show, onHide}) => {
    const {items} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', items.selectedBrand.id)
        formData.append('typeId', items.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => onHide())
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
                        <Dropdown.Toggle>{items.selectedType.name || 'Choose the item type'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => items.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt=2 mb-2">
                        <Dropdown.Toggle>{items.selectedBrand.name || 'Choose the item brand'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => items.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter the item name"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Enter the item price"
                        type="number"
                    />
                    <Form.Control
                        placeholder="First image should be transparent png!"
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    {/*<Form.Control*/}
                    {/*    className="mt-3"*/}
                    {/*    type="file"*/}
                    {/*    onChange={selectFile}*/}
                    {/*/>*/}
                    {/*<Form.Control*/}
                    {/*    className="mt-3"*/}
                    {/*    type="file"*/}
                    {/*    onChange={selectFile}*/}
                    {/*/>*/}
                    {/*<Form.Control*/}
                    {/*    className="mt-3"*/}
                    {/*    type="file"*/}
                    {/*    onChange={selectFile}*/}
                    {/*/>*/}
                    {/*<Form.Control*/}
                    {/*    className="mt-3"*/}
                    {/*    type="file"*/}
                    {/*    onChange={selectFile}*/}
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
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Enter the property name"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Enter the property description"
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
                <Button variant="dark" size="sm" onClick={addItem}>ADD NEW ITEM</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateItem;