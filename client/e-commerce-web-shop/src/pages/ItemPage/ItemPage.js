import React, {useState, useEffect} from 'react';
import {Col, Image, Row, Carousel, Button} from "react-bootstrap";
import cl from './ItemPage.module.css'
import useMediaQuery from "../../hooks/useMediaQuery";
import {useParams} from 'react-router-dom'
import {fetchOneItem} from "../../http/itemAPI";

const ItemPage = ({setAmountItemsInCart, cart, addToCart}) => {

    const menuTabs = [{id: 1, name: 'Product'}, {id: 2, name: 'Fit'}, {id: 3, name: 'Brand ID'}]

    const {id} = useParams();
    const [item, setItem] = useState({info: []});
    const [activeButton, setActiveButton] = useState("");
    const [isTabTitleClassActive, setTabTitleClassActive] = useState("");
    const [showTab, setShowTab] = useState(false);
    const isMobileScreenSize = useMediaQuery('(max-width: 576px)');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        setAmountItemsInCart(cart.length)
    }, [cart])


    const itemImages = [
        {id: 1, name: item.img1},
        {id: 2, name: item.img2},
        {id: 3, name: item.img3},
        {id: 4, name: item.img4},
        {id: 5, name: item.img5}
    ]

    const itemImagesLeft = itemImages.slice(0, 3)

    const itemImagesRight = itemImages.slice(3)

    const availableSizes = [
        {id: 1, name: item.size1},
        {id: 2, name: item.size2},
        {id: 3, name: item.size3},
        {id: 4, name: item.size4},
        {id: 5, name: item.size5},
        {id: 6, name: item.size6}
    ]

    const menuTextForTabs = [
        {id: 1, name: item.menuTextForTabs1},
        {id: 2, name: item.menuTextForTabs2},
        {id: 3, name: item.menuTextForTabs3}
    ]

    const toggleTabs = (isTabTitleClassActive) => {
        setTabTitleClassActive(isTabTitleClassActive)
        setShowTab(true)
    }

    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data)).finally(() => setLoading(false))
        setTabTitleClassActive(menuTabs[0].id)
    }, [])


    if (loading) {
        return <span></span>
    }

    return (
        <main className={cl.mainContent}>
            <Row className={cl.rowContainer}>
                {isMobileScreenSize
                    ?
                    <Col className={cl.columnPhotoContainer} lg="true" md={6}>
                        <Carousel variant="dark">
                            {itemImages.map(image =>
                                <Carousel.Item>
                                    <Image
                                        key={image.id}
                                        className={cl.productGalleryImage}
                                        src={process.env.REACT_APP_API_URL + image.name}
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </Col>
                    :
                    <>
                        <Col className={cl.columnPhotoContainer} lg={true} md={6}>
                            {itemImagesLeft.map(imageLeft =>
                                <Image
                                    key={imageLeft.id}
                                    className={cl.productGalleryImage}
                                    src={process.env.REACT_APP_API_URL + imageLeft.name}
                                />
                            )}
                        </Col>
                        <Col className={cl.columnPhotoContainer} lg={true} md={6}>
                            {itemImagesRight.map(imageRight =>
                                <Image
                                    key={imageRight.id}
                                    className={cl.productGalleryImage}
                                    src={process.env.REACT_APP_API_URL + imageRight.name}
                                />
                            )}
                        </Col>
                    </>}

                <Col className={cl.columnProductInfoContainer}>
                    <div className={cl.productContentContainer}>
                        <div className={cl.productHeaderContainer}>
                            <h1 className={cl.productHeaderTextContainer}>
                                {item.name}
                            </h1>
                            <span className={cl.productPrice}>
                                {item.price + ' $'}
                            </span>
                            <p className={cl.productColor}>
                                Color: {item.color[0].toUpperCase()
                            + item.color.substring(1).toLowerCase()
                            || "" /* Used .substring so as it's faster than .slice */}
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
                                {availableSizes.map(sizeAmount =>
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
                                            {sizeAmount.name}
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={cl.paymentButton}>
                            {isMobileScreenSize
                                ? <Button size="sm" variant="dark" className="align-self-center mt-2">ADD TO
                                    CART</Button>
                                : <Button
                                    onClick={() => addToCart(item)}
                                    size="lg"
                                    variant="dark"
                                    className="align-self-center mt-2"
                                >
                                    ADD TO
                                    CART</Button>
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
                                        {menuTextForTabs.map((menuTextForTabs) =>
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