import React from 'react';

/** STYLED COMPONENTS */
import {PaginationWrapper} from '../styles/Pagination';

/** COMPONENTS */
import { HorizontalLine } from '../styles/HorizontalLine';

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i ++) {
        pageNumbers.push(i)
    };
    
    return(
        <PaginationWrapper>
            <HorizontalLine red className="news-line" />

            <ul>
                {
                    pageNumbers.map(pageNumber => {
                        return(
                            <li key={pageNumber} onClick={() => {
                                    paginate(pageNumber);
                                    window.scrollTo(0, 1000);
                                }}
                            >
                                {pageNumber}
                            </li>
                        )
                    })
                }
            </ul>
        </PaginationWrapper>
    )
};

export default Pagination;