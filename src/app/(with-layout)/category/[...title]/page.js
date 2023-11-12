'use client'
import PaginationPage from '@/components/Shared/pagination/pagination';
import SingleCard from '@/components/card/card';
import { PaginationContext } from '@/context/paginationContext';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

const CategoryProject = () => {
    const { itemsPerPage, currentPage, setCurrentPage } = useContext(PaginationContext)
    const Title = usePathname().split('/')[2].split('-').join(' ');

    const { data, isLoading, error } = useQuery({
        queryKey: [`${Title}`, itemsPerPage, currentPage],
        queryFn: async () => {
            const res = await fetch(`${process.env.FETCH_URI}project/${Title}?perPage=${itemsPerPage}&currentPage=${currentPage}`)
            const projectItems = await res.json();
            console.log(projectItems);
            return projectItems;
        }
    })
    const pageCount = Math.ceil(data?.count / itemsPerPage)
    if (isLoading) {
        return <h2>Loading......................</h2>
    }
    else if (error) {
        return
    }

    return (
        <div>
            {/* category left side start */}
            <div className="w-full my-5 rounded">
                <h5 className="text-2xl sm:text-3xl tracking-wide p-2 bg-gradient-to-l -from-px-primaryColor uppercase font-bold">{Title}</h5>
                {/* recent post start */}

                <div className='grid sm:grid-cols-2 gap-4 mt-10 mb-5'>
                    {
                        data.result.map(item => <SingleCard key={item._id} item={item} />)
                    }
                </div>
                <div>
                    <PaginationPage pageCount={pageCount} />
                </div>
                {/* recent post end */}
            </div>

            {/* google ads start */}
            <div className="w-full h-28 shadow-xl shadow-foreground-400 my-5">
                google ads
            </div>
            {/* google ads end */}

            {/* category left side end */}

            <div className="w-full h-24">

            </div>
        </div>
    );
};

export default CategoryProject;