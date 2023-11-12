'use client'
import DashboardSideNav from '@/components/Shared/Navbar/DNavbar';
import { useState } from 'react';
import style from './dashboard.module.css'
import DashboardTopSide from '@/components/Shared/Navbar/DTNavbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
const DashboardLayout = ({ children }) => {
    const [openNavbar, setOpenNavbar] = useState(true);
    // console.log(openNavbar);
    return (
        < >
            <QueryClientProvider client={queryClient}>
                <div className='relative'>
                    <div className={`${style.dashboard_navbar} ${openNavbar ? `${style.active}` : ""}`}>

                        <DashboardSideNav openNavbar={openNavbar} />
                    </div>

                    <div className={`${style.dashboard_main} ${openNavbar ? `${style.active}` : ""}`}>
                        <DashboardTopSide openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
                        <div className='mt-16'>

                            {children}
                        </div>
                    </div>
                </div>
            </QueryClientProvider>
        </>
    );
};

export default DashboardLayout;