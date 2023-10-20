'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const CategoryProject = () => {
    const Title = usePathname().split('/')[2].split('-').join(' ')

    return (
        <div>
            {/* category left side start */}
            <div className="col-span-3 md:col-span-2">
                <div className="w-full h-10 shadow-large  my-5 rounded">
                    <h5 className="text-2xl sm:text-3xl tracking-wide p-2 bg-gradient-to-l -from-px-primaryColor uppercase font-bold">{Title}</h5>
                    {/* recent post start */}




                    {/* recent post end */}
                </div>


                {/* google ads start */}
                <div className="w-full h-28 shadow-xl shadow-foreground-400 my-5">
                    google ads
                </div>
                {/* google ads end */}

            </div>
            {/* category left side end */}


            <div className="w-full h-24">

            </div>
        </div>
    );
};

export default CategoryProject;