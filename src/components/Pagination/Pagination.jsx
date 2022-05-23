import React from 'react';
import ReactPaginate from "react-paginate";
import { ReactComponent as ArrowLeft } from './Arrow_Left.svg';
import { ReactComponent as ArrowRight } from './Arrow_Right.svg';
import styles from './PaginationContainer.module.scss';


const Pagination = ({perPage, setPage, page, totalItems}) => {
    const endIndex = Math.min(page * perPage, totalItems);
    const startIndex = (page - 1) * perPage + 1;
    const pageCount = Math.ceil(totalItems / perPage);

    return (
        <div className={styles.paginationContainer}>
            <span className="paginationItemsCounter">
                {startIndex}-{endIndex} of {totalItems} items
             </span>
            <ReactPaginate
                previousLabel={<ArrowLeft/>}
                nextLabel={<ArrowRight/>}
                breakLabel={'...'}
                breakClassName="paginationPage"
                previousClassName="paginationArrow"
                nextClassName="paginationArrow"
                pageCount={pageCount}
                forcePage={page - 1}
                marginPagesDisplayed={1}
                onPageChange={({selected}) => {
                    setPage(selected + 1);
                }}
                containerClassName="paginationPagesContainer"
                pageClassName="paginationPage"
                pageLinkClassName="paginationPageLink"
                activeLinkClassName="paginationActiveLink"
            />
        </div>
    );
};

export default Pagination;