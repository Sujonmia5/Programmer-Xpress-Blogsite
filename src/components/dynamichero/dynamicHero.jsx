'use client'
import { usePathname } from "next/navigation";

const DynamicHero = () => {
    const path = usePathname().split('/')

    return (
        <div className="w-full bg">
            <div >
                <ul>
                    <li>
                        <a className="flex -text-px-gray hover:-text-px-primaryColor uppercase gap-1" href="https://jthemes.net/themes/wp/genz" title="Home">
                            <svg className=" h-5 w-5 -text-px-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li className="item-cat">
                        <a href="https://jthemes.net/themes/wp/genz/category/technology/">
                            {path}
                        </a>
                    </li>
                </ul>
            </div >

        </div >
    );
};

export default DynamicHero;