'use Client'
import { useQuery } from "@tanstack/react-query";
import Li from "./link";

const Category = () => {

    const { data: categories = [], error } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`${process.env.FETCH_URI}category`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="py-5">
            <h3 className="text-start w-full px-1 text-xl mb-2  pb-1 bg-gradient-to-l -from-px-primaryColor ">Category</h3>
            <div className="my-5">
                <ul>
                    {
                        categories.map((category) => <Li key={category._id} category={category}></Li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Category;