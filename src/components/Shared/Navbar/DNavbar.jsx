import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu } from "@nextui-org/react";
import { TfiWrite } from 'react-icons/tfi'
import { AiOutlineProfile } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiLock } from 'react-icons/fi'
import { BiUserPlus } from 'react-icons/bi'
import { VscProject, VscSignOut } from 'react-icons/vsc'
import { MdOutlineNotifications } from 'react-icons/md'
import Link from "next/link";
import style from './navbar.module.css';

const DashboardSideNav = ({ openNavbar }) => {

    const navItem = [
        {
            item: 'dashboard',
            href: '/dashboard',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="min-w-unit-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

        },
        {
            item: 'Writing post',
            href: '/dashboard/create-new-post',
            icon: <TfiWrite className="min-w-unit-8 h-8 mr-1"></TfiWrite>
        },
        {
            item: 'all Post',
            href: '/dashboard/all-post',
            icon: <AiOutlineProfile className="min-w-unit-9 h-9 mr-1"></AiOutlineProfile>
        },
        {
            item: 'notification',
            href: '/dashboard/notification',
            icon: <MdOutlineNotifications className="min-w-unit-9 h-9 mr-1"></MdOutlineNotifications>
        },
        {
            item: 'Add project',
            href: '/dashboard/create-project',
            icon: <VscProject className="min-w-unit-8 h-8 mr-1"></VscProject>
        },
        {
            item: 'all project',
            href: '/dashboard/project-list',
            icon: <VscProject className="min-w-unit-8 h-8 mr-1"></VscProject>
        },
        {
            item: 'profile',
            href: '/dashboard/profile',
            icon: <CgProfile className="min-w-unit-9 h-9 mr-1"></CgProfile>
        },
        {
            item: 'change password',
            href: '/dashboard/change-password',
            icon: <FiLock className="min-w-unit-9 h-9 mr-1"></FiLock>
        },
        {
            item: 'user added',
            href: '/dashboard/user',
            icon: <BiUserPlus className="min-w-unit-9 h-9 mr-1"></BiUserPlus>
        },
    ]

    return (
        <Navbar classNames={{
            base: '-bg-px-dark',
            wrapper: 'px-0 z-50 h-full block relative'

        }}
        >
            <NavbarBrand className="mt-10">
                <div>
                    Programming Xpress
                </div>
            </NavbarBrand>
            <NavbarContent
                className="gap-0 block overflow-hidden py-10"
            >
                {
                    navItem.map((item, i) => <NavbarItem
                        key={i}
                        className={style.dashboard_link}
                    >
                        <Link className="capitalize text-xl flex items-center py-3 gap-x-4" href={item.href}>
                            {item.icon}
                            <span>{item.item}</span>

                        </Link>
                    </NavbarItem>)
                }
                <NavbarItem
                    className="">
                    <Button variant="shadow" color="primary" className={`${style.btn}`}
                        startContent={<VscSignOut className="min-w-unit-9 h-9"></VscSignOut>}
                    >

                        {
                            !openNavbar &&
                            'Sign Out'
                        }
                    </Button>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
};

export default DashboardSideNav;

