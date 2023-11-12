'use client'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
// import style from './navbar.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Hamburger from 'hamburger-react';


const NavbarPublic = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='xl'
            className='bg-[#242243] text-white shadow-2xl'
        >
            <NavbarContent className="sm:hidden -ml-5" justify="start">
                <Hamburger size={25} color='#fff' toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </NavbarContent>

            <NavbarContent className="sm:hidden -mr-3" justify="center">
                <NavbarBrand role='a'>
                    <Image src='https://i.ibb.co/wgQrtpG/PXPRESS.png'
                        width={150}
                        height={60} className='object-cover' alt='brand image' />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 w-[1200px]" justify="center">
                <NavbarBrand>
                    <a href={'/'}>
                        <Image src='https://i.ibb.co/wgQrtpG/PXPRESS.png'
                            width={250}
                            height={80} alt='brand image' />
                    </a>

                </NavbarBrand>
                <NavbarItem>
                    <a color="foreground" href="/">
                        Home
                    </a>
                </NavbarItem>
                <NavbarItem isActive>
                    <a href="/category" aria-current="page">
                        Blog
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" href="/category">
                        Category
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" href="project">
                        Project
                    </a>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem className="hidden lg:flex">
                    <a href="login">Login</a>
                </NavbarItem>
                <NavbarItem>
                    <Button color="warning" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className='top-40'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <a
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </a>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavbarPublic;