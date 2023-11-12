'use client'
import { createContext, useState } from "react";

export const PaginationContext = createContext()

const ContextPagination = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [currentPageTitle, setCurrentPageTitle] = useState(1);
    const itemsPerPage = 10;

    const PaginationInfo = {
        itemsPerPage, currentPage, setCurrentPage,
        // currentPageTitle, setCurrentPageTitle
    };

    return <PaginationContext.Provider value={PaginationInfo}>
        {children}
    </PaginationContext.Provider>
}
export default ContextPagination;