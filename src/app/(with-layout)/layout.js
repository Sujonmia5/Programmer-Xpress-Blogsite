import NavbarPublic from "@/components/Navbar/Navbar";

const layout = ({ children }) => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto h-24">
                ads
            </div>
            <NavbarPublic />
            <div className="container bg-red-600 mx-auto">
                <div className="bg-yellow-500">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;