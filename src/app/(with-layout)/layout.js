'use client'

import Footer from "@/components/Shared/Footer/footer";
import NavbarPublic from "@/components/Shared/Navbar/Navbar";
import Category from "@/components/Shared/category/category";
import SliderSection from "@/components/Shared/sliderSection/sliderSection";
import { Card, CardBody, Image, Input } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { HiCalendarDays, HiChatBubbleOvalLeft } from "react-icons/hi2";

const queryClient = new QueryClient()

const layout = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="">
                <div className="max-w-6xl mx-auto h-24">
                    ads
                </div>
                <NavbarPublic />
                <div className="container bg-red-600 mx-auto">
                    <div className="w-full h-64">
                        ads google
                    </div>
                    <SliderSection />
                    <div className="grid grid-cols-3 gap-x-4">
                        <div className="col-span-3 md:col-span-2">
                            {children}
                        </div>
                        {/* home right side start */}
                        <div className="col-span-3 md:col-span-1">
                            {/* search filed start*/}
                            <div className=" h-40 my-5 rounded-md shadow-lg border -border-px-secondary flex flex-col justify-center items-center px-4 relative">
                                <h3 className="text-start w-full px-1 text-xl mb-2 bg-gradient-to-l -from-px-primaryColor ">Search</h3>
                                <div className="relative w-full">
                                    <Input
                                        color="secondary"
                                        type="email"
                                        variant="bordered"
                                        radius="md"
                                        label='Search'
                                        // placeholder="Type on search"
                                        classNames={{
                                            label: '-text-px-white',
                                            input: [
                                                '-bg-px-dark font-serif'
                                            ],
                                            inputWrapper: [
                                                '-border-px-secondary shadow-md shadow-foreground-400'
                                            ]
                                        }}
                                    />
                                    <HiOutlineSearchCircle className="w-10 h-10 absolute top-0 bottom-0 my-auto right-1 cursor-pointer -text-px-gray hover:-text-px-primaryColor transition-all" />
                                </div>
                            </div>
                            {/* search flied end */}

                            {/* google ads start */}
                            <div className=" h-72 my-5 rounded-md shadow-lg border -border-px-secondary px-4 relative flex justify-center items-center flex-col">
                                <h3 className="text-lg ">Banner Ads</h3>
                                <span>300 X 300</span>
                            </div>
                            {/* google ads end */}

                            {/* category section start */}
                            <div className="my-5 rounded-md shadow-lg border -border-px-secondary px-4 relative">
                                <Category />
                            </div>
                            {/* category section end */}

                            <div className="h-[600px] w-full border rounded-md -border-px-gray flex items-center justify-center">
                                <h2 className="text-3xl"> google ads</h2>
                            </div>

                            {/* recent post category start*/}
                            <div className="w-full border shadow-lg p-4  my-5 rounded-md -border-px-gray">
                                <h3 className="text-start w-full px-1 text-xl mb-2 bg-gradient-to-l -from-px-primaryColor">Recent Post</h3>
                                <Card classNames={{
                                    base: 'rounded-none -bg-px-dark -text-px-white shadow-xl my-4'
                                }}>
                                    <div className="w-full h-auto grid grid-cols-3 items-center">
                                        <Image
                                            classNames={{
                                                img: 'rounded-none object-cover w-28 h-full',
                                                wrapper: 'w-full h-24 col-span-1'
                                            }}
                                            src="https://source.unsplash.com/random/800x450" width={200}></Image>
                                        <CardBody className="col-span-2 px-4 py-0">
                                            <div className="space-y-3">
                                                <h4 className="text-lg capitalize">blog title</h4>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="flex items-center gap-1">
                                                        <HiCalendarDays />
                                                        date
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <HiChatBubbleOvalLeft />
                                                        comment
                                                    </span>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </div>
                                </Card>
                                <Card classNames={{
                                    base: 'rounded-none -bg-px-dark -text-px-white shadow-xl my-4'
                                }}>
                                    <div className="w-full h-auto grid grid-cols-3 items-center">
                                        <Image
                                            classNames={{
                                                img: 'rounded-none object-cover w-28 h-full',
                                                wrapper: 'w-full h-24 col-span-1'
                                            }}
                                            src="https://source.unsplash.com/random/800x450" width={200}></Image>
                                        <CardBody className="col-span-2 px-4 py-0">
                                            <div className="space-y-3">
                                                <h4 className="text-lg capitalize">blog title</h4>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="flex items-center gap-1">
                                                        <HiCalendarDays />
                                                        date
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <HiChatBubbleOvalLeft />
                                                        comment
                                                    </span>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </div>
                                </Card>
                            </div>
                            {/* recent post category end*/}

                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        </QueryClientProvider>
    );
};

export default layout;