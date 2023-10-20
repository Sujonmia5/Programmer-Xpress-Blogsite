import React from 'react';

const Li = ({ category }) => {
    const { category_name, count } = category;
    const urlRegex = /\s/g;
    const category_url = category_name.toLowerCase().replace(urlRegex, '-')
    // console.log(category_url);
    return (
        <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2 px-4">
            <a className="w-full flex items-center justify-between" href={`/category/${category_url}`} >
                {category_name} <span>{count}</span>
            </a>
        </li>
    );
};

export default Li;