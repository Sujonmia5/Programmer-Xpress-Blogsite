'use client'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
// import style from './navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


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
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand role='link'>
                    <Image src='https://i.ibb.co/wgQrtpG/PXPRESS.png'
                        width={150}
                        height={60} className='object-cover' />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 w-[1200px]" justify="center">
                <NavbarBrand>
                    <Link href={'/'}>
                        <Image src='https://i.ibb.co/wgQrtpG/PXPRESS.png'
                            width={250}
                            height={80} />
                    </Link>

                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/blog" aria-current="page">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="category">
                        Category
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="project">
                        Project
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem className="hidden lg:flex">
                    <Link href="login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className='top-40'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavbarPublic;