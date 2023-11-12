'use client'
import { Black_Ops } from "@/fonts/fonts";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Hamburger from "hamburger-react";

const DashboardTopSide = ({ openNavbar, setOpenNavbar }) => {
    return <>
        <div className='z-40 w-full fixed'>
            <Navbar
                classNames={{
                    base: "-bg-px-light shadow-xl -shadow-px-indigo",
                    wrapper: 'px-0 gap-0 sm:gap-4',
                }}
                maxWidth='full'
            >

                <div
                    className='h-16 flex items-center justify-start sm:px-5'
                    onClick={() => setOpenNavbar(!openNavbar)}
                >
                    <Hamburger size={25} color='red' toggled={!openNavbar} toggle={setOpenNavbar} />
                </div>

                <NavbarBrand
                    className='text-center w-full flex justify-center items-center'
                >
                    <h1 className={`${Black_Ops.className} text-2xl sm:text-4xl font-semibold `}>Programming Xpress</h1>
                </NavbarBrand>

            </Navbar>
        </div>
    </>
};

export default DashboardTopSide;