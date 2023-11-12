'use client'

import { Ubuntu_font } from '@/fonts/fonts';
import { Card, CardBody } from '@nextui-org/react';
import { AiOutlineProfile } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import RecentPost from '../Recent-post/Recent';

const DashboardHero = () => {
    return (
        <div>
            <div className='mt-6 w-11/12 mx-auto grid grid-cols-4 gap-4'>
                <Card className='hover:-bg-px-dark transition-all cursor-pointer' >
                    <CardBody className='flex items-center justify-between flex-row'>
                        <div className={``}>
                            <h2 className={`${Ubuntu_font.className} text-5xl -text-px-primaryColor font-medium mb-2`}>56161</h2>
                            <span>
                                <strong className='-text-px-gray'>Daily view</strong>
                            </span>
                        </div>
                        <div>
                            <BsFillEyeFill className='w-10 h-10 -text-px-cyan'></BsFillEyeFill>
                        </div>
                    </CardBody>
                </Card>
                <Card className='hover:-bg-px-dark transition-all cursor-pointer' >
                    <CardBody className='flex items-center justify-between flex-row'>
                        <div className={``}>
                            <h2 className={`${Ubuntu_font.className} text-5xl -text-px-primaryColor font-medium mb-2`}>56161</h2>
                            <span>
                                <strong className='-text-px-gray'>Total view</strong>
                            </span>
                        </div>
                        <div>
                            <BsFillEyeFill className='w-10 h-10 -text-px-cyan'></BsFillEyeFill>
                        </div>
                    </CardBody>
                </Card>
                <Card className='hover:-bg-px-dark transition-all cursor-pointer' >
                    <CardBody className='flex items-center justify-between flex-row'>
                        <div className={``}>
                            <h2 className={`${Ubuntu_font.className} text-5xl -text-px-primaryColor font-medium mb-2`}>56161</h2>
                            <span>
                                <strong className='-text-px-gray'>Total post</strong>
                            </span>
                        </div>
                        <div>
                            <AiOutlineProfile className="w-10 h-10 mr-1 -text-px-cyan"></AiOutlineProfile>
                        </div>
                    </CardBody>
                </Card>
                <Card className='hover:-bg-px-dark transition-all cursor-pointer' >
                    <CardBody className='flex items-center justify-between flex-row'>
                        <div className={``}>
                            <h2 className={`${Ubuntu_font.className} text-5xl -text-px-primaryColor font-medium mb-2`}>56161</h2>
                            <span>
                                <strong className='-text-px-gray'>Total Comment</strong>
                            </span>
                        </div>
                        <div>
                            <FaRegComment className='w-10 h-10 -text-px-cyan'></FaRegComment>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className='my-5'>
                <h3 className='text-3xl  -text-px-dark'>Recent Post</h3>

                <RecentPost />

            </div>
        </div>
    );
};

export default DashboardHero;