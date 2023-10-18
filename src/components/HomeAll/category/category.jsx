import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

const Category = () => {

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className="py-5">
            <h3 className="text-start w-full px-1 text-xl mb-2 border-b pb-1 -border-px-secondary -bg-px-primaryColor">Category</h3>
            <div className="my-5">
                <h4 className="text-start w-full px-1 text-base  -bg-px-purple">Blog Category</h4>
                <ul>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                </ul>
            </div>
            <div className="my-5">
                <h4 className="text-start w-full px-1 text-base -bg-px-purple">Project Category</h4>
                <ul>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                    <li className="text-base  transition-all hover:-text-px-primaryColor my-2 shadow-lg p-2">
                        <Link className="w-full block" href={''} >blog 1</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Category;