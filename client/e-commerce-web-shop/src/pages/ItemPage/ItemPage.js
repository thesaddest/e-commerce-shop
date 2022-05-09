import React, {useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import cl from './ItemPage.module.css'

const ItemPage = () => {
    const [activeButton, setActiveButton] = useState("");

    const item = {
        id: 1,
        name: 'New Balance 990v5',
        made: 'Made in USA',
        price: 250,
        color: 'grey',
        itemAvailable: true,
        availableSizes: [
            {id: 1, size: 41}, {id: 2, size: 42}, {id: 3, size: 43}, {id: 4, size: 44}, {id: 5, size: 45}],
        img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/59e04248954bd7b274eb681c88400cc1.jpg'
    }
    return (
        <main className={cl.mainContent}>
            <Row className={cl.rowContainer}>
                <Col className={cl.columnPhotoContainer} lg={true} md={6}>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                </Col>
                <Col className={cl.columnPhotoContainer} lg={true} md={6}>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                    <Image className={cl.productGalleryImage} src={item.img}/>
                </Col>
                <Col className={cl.columnProductInfoContainer}>
                    <div className={cl.productContentContainer}>
                        <div className={cl.productHeaderContainer}>
                            <h1 className={cl.productHeaderTextContainer}>
                                {item.name}
                            </h1>
                            <div className={cl.subDescription}>
                                {item.made}
                            </div>
                            <span className={cl.productPrice}>
                                {item.price + ' $'}
                            </span>
                            <p className={cl.productColor}>
                                Color: {item.color}
                            </p>
                            <div className={cl.prductAvailabilaty}>
                                Product is available: {item.itemAvailable
                                ? <span className={cl.spanItemAvailable}></span>
                                : <span className={cl.spanItemUnavailable}></span>}
                            </div>
                        </div>
                        <div className={cl.sizeSelectContainer}>
                            <div className={cl.chooseSize}>
                                <span className={cl.chooseSizeText}>Choose your size:</span>
                            </div>
                            <div className={cl.chooseSizeWrapper}>
                                {item.availableSizes.map(sizeAmount =>
                                    <span
                                        key={sizeAmount.id}
                                        onClick={() => {setActiveButton(sizeAmount.id)}}
                                        className={activeButton === sizeAmount.id
                                            ? cl.sizeSelectItemActive
                                            : cl.sizeSelectItem
                                        }
                                    >
                                        <span
                                            className={activeButton === sizeAmount.id
                                                ? cl.sizeSelectItemSpanActive
                                                : cl.sizeSelectItemSpan
                                            }
                                        >
                                            {sizeAmount.size}
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    );
};

export default ItemPage;