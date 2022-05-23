import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";


const Pages = observer(() => {
    const {items} = useContext(Context)
    const pageCount = Math.ceil(items.totalCount / items.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    const paginate = (num) => {
        items.setPage(num)
        window.scrollTo(0,0)
    }

    const nextPage = () => {
        if(items.page < pageCount) {
            items.setPage(items.page + 1)
            window.scrollTo(0,0)
        } else {
            return
        }
    }

    const prevPage = () => {
        if(items.page > 1) {
            items.setPage(items.page - 1)
            window.scrollTo(0,0)
        } else {
            return
        }
    }

    return (
        <Pagination className="mb-5">
            <Pagination.Prev onClick={prevPage}/>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={items.page === page}
                    onClick={() => paginate(page)}
                >
                    {page}
                </Pagination.Item>
            )}
            <Pagination.Next onClick={nextPage}/>
        </Pagination>
    );
});

export default Pages;