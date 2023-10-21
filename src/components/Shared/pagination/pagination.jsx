import { useContext } from "react";
import { Pagination, PaginationItemType } from "@nextui-org/react";
import { ChevronIcon } from "./svg";
import { PaginationContext } from "@/context/paginationContext";


const PaginationPage = ({ pageCount }) => {
    const { itemsPerPage, currentPage, setCurrentPage } = useContext(PaginationContext);

    const renderItem = ({ ref, value, isActive, onNext, onPrevious, setPage, className, }) => {

        if (value === PaginationItemType.NEXT) {
            return (
                <button
                    className={`${className ? className : ""
                        } bg-default-400/50 -text-px-white min-w-8 w-8 h-8`}
                    onClick={onNext}
                >
                    <ChevronIcon className="rotate-180" />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button
                    className={`${className ? className : ""
                        } bg-default-200/50 min-w-8 w-8 h-8`}
                    onClick={onPrevious}
                >
                    <ChevronIcon />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return <button className={className}>...</button>;
        }

        return (
            <button
                ref={ref}
                className={`${className ? className : ""
                    } ${isActive ? "text-white bg-gradient-to-r -from-px-primaryColor -to-px-teal" : ""}`}
                onClick={() => { setCurrentPage(value), setPage(value) }}
            >
                {value}
            </button>
        );
    };

    console.log(currentPage);

    return (
        <Pagination
            disableCursorAnimation
            showControls
            total={pageCount}
            initialPage={currentPage}
            onChange={(e) => setCurrentPage(e)}
            className="gap-2"
            radius="full"
            renderItem={renderItem}
            variant="light"
        />
    );
};

export default PaginationPage;
