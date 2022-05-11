import React, {useState, useEffect} from 'react';
import {Col, Image, Row, Carousel, Button} from "react-bootstrap";
import cl from './ItemPage.module.css'
import useMediaQuery from "../../hooks/useMediaQuery";

const ItemPage = () => {
    const menuTabs = [{id: 1, name: 'Product'}, {id: 2, name: 'Fit'}, {id: 3, name: 'Brand ID'}]

    const [activeButton, setActiveButton] = useState("");
    const [isTabTitleClassActive, setTabTitleClassActive] = useState("");
    const [showItem, setShowItem] = useState(false);
    const isMobileScreenSize = useMediaQuery('(max-width: 576px)');

    const toggleTabs = (isTabTitleClassActive) => {
        setTabTitleClassActive(isTabTitleClassActive)
        setShowItem(true)
    }

    useEffect(() => {
        setTabTitleClassActive(menuTabs[0].id)
    }, [])


    const item = {
        id: 1,
        name: 'New Balance 990v5',
        made: 'Made in USA',
        price: 270,
        color: 'grey',
        itemAvailable: true,
        availableSizes: [
            {id: 1, size: 40},
            {id: 2, size: 41},
            {id: 3, size: 42},
            {id: 4, size: 43},
            {id: 5, size: 44},
            {id: 6, size: 45},
        ],
        menuTextForTabs: [
            {
                id: 1, name: 'Proof that quality still exists, our Made in the USA 990v5 ' +
                    'is the ultimate blend of performance and style. Made without compromise, ' +
                    'the 990v5 is a staple of both morning runs and fashion runways. ' +
                    'New Balance MADE U.S. footwear contains a domestic value of 70% or more. ' +
                    'MADE makes up a limited portion of New Balance’s U.S. sales.'
            },
            {
                id: 2,
                name: 'The 990v5 runs true to size but has a wider toe box than you may have had previously. This gives you plenty of wiggle-room.\n' +
                    '\n' +
                    'If you’re not a fan of the extra room, wear thicker socks. Thicker socks may help absorb sweat and is a trick on how to wear shoes that are too big anyway.\n' +
                    '\n' +
                    'Most customers don’t seem to mind the roomy toe box, though.\n' +
                    '\n' +
                    'As far as size options for the fit, they run sizes 7–14 for men and in half-sizes to 12.5.'
            },
            {
                id: 3, name: 'STYLE #: W990GL5'
            }
        ],
        imagesLeft: [
            {
                id: 1,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/c50e8cb15f2a233e5c98300a55e8b050.jpg'
            },
            {
                id: 2,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/04e445096c18dc8688744b2c547db7a0.jpg'
            },
            {
                id: 3,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/acdbab7846d8cedc141186a48cf9205e.jpg'
            },
            {
                id: 4,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/59e04248954bd7b274eb681c88400cc1.jpg'
            },
            {
                id: 5,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/a7f7c27bbb93cfa453b7606133118e40.jpg'
            }
        ],
        imagesRight: [
            {
                id: 6,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/e6eca50da39a85ad7c9c9028ff1c091e.jpg'
            },
            {
                id: 7,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/9b81415c412d0f87a920ecfb6781e23f.jpg'
            },
            {
                id: 8,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/024bdceb51e03160b4c0d218b315c54f.jpg'
            },
            {
                id: 9,
                img: 'https://nbsklep.pl/picture/fit-in/500x500/smart/filters:fill(white):quality(75)/c374bcede3119758b02258aaa1d0ee6e.jpg'
            }
        ]
    }
    return (
        <main className={cl.mainContent}>
            <Row className={cl.rowContainer}>
                {isMobileScreenSize
                    ?
                    <>
                        <Col className={cl.columnPhotoContainer} lg="true" md={6}>
                            <Carousel variant="dark">
                                {item.imagesLeft.map(imagesLeft =>
                                    <Carousel.Item>
                                        <Image
                                            key={imagesLeft.id}
                                            className={cl.productGalleryImage}
                                            src={imagesLeft.img}
                                        />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </Col>
                    </>
                    :
                    <>
                        <Col className={cl.columnPhotoContainer} lg={true} md={6}>
                            {item.imagesLeft.map(imagesLeft =>
                                <Image
                                    key={imagesLeft.id}
                                    className={cl.productGalleryImage}
                                    src={imagesLeft.img}
                                />
                            )}
                        </Col>
                        <Col className={cl.columnPhotoContainer} lg={true} md={6}>
                            {item.imagesRight.map(imagesRight =>
                                <Image
                                    key={imagesRight.id}
                                    className={cl.productGalleryImage}
                                    src={imagesRight.img}
                                />
                            )}
                        </Col>
                    </>
                }
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
                            <div className={cl.productAvailability}>
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
                                        onClick={() => {
                                            setActiveButton(sizeAmount.id)
                                        }}
                                        className={activeButton === sizeAmount.id
                                            ? [cl.sizeSelectItem, cl.sizeSelectItemActive].join(' ')
                                            : cl.sizeSelectItem
                                        }
                                    >
                                        <span
                                            className={activeButton === sizeAmount.id
                                                ? [cl.sizeSelectItemSpan, cl.sizeSelectItemSpanActive].join(' ')
                                                : cl.sizeSelectItemSpan
                                            }
                                        >
                                            {sizeAmount.size}
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={cl.paymentButton}>
                            {isMobileScreenSize
                                ? <Button size="sm" variant="dark" className="align-self-center mt-2">ADD TO CART</Button>
                                : <Button size="lg" variant="dark" className="align-self-center mt-2">ADD TO CART</Button>
                            }

                        </div>
                        <div className={cl.productDescription}>
                            <section className={cl.productAccordion}>
                                <div className={cl.tabContainer}>
                                    <div className={cl.tabTitles}>
                                        {menuTabs.map((menuTabs,) =>
                                            <h3
                                                key={menuTabs.id}
                                                onClick={() => toggleTabs(menuTabs.id)}
                                                className={isTabTitleClassActive === menuTabs.id
                                                    ? [cl.tabTitle, cl.tabTitleActive].join(' ')
                                                    : cl.tabTitle}
                                            >
                                                {menuTabs.name}
                                            </h3>)
                                        }
                                    </div>
                                    <div className={cl.tabTextBox}>
                                        {item.menuTextForTabs.map((menuTextForTabs) =>
                                            <div
                                                key={menuTextForTabs.id}
                                                className={isTabTitleClassActive === menuTextForTabs.id ? cl.tabContentActive : cl.tabContent}>
                                                <p>
                                                <span>
                                                    {menuTextForTabs.name}
                                                </span>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    );
};

export default ItemPage;