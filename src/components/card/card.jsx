import { Card, CardBody, Image } from '@nextui-org/react';
import style from './card.module.css'
import { HiUser } from 'react-icons/hi';
import { HiMiniCalendarDays, HiMiniChatBubbleOvalLeft } from 'react-icons/hi2';

const SingleCard = () => {
    return (
        <Card
            radius='none'
            shadow='lg'
            classNames={{
                header: 'shadow-foreground-400'
            }}
        >
            <Image
                shadow="sm"
                radius="none"
                width="100%"
                alt={'item.title'}
                className="w-full object-cover h-[430px] z-20"
                src={'https://i.ibb.co/hBfsXLp/front-left-side-47.jpg'}
            />
            <CardBody
                className='rounded-none px-4 sm:px-10 pt-8 sm:pt-16 space-y-5 -bg-px-dark -text-px-light relative overflow-visible'>
                <div className='absolute left-10 -top-14 z-30 w-28 h-28 p-5 -bg-px-primaryColor rounded-lg -text-px-light text-4xl flex justify-center items-center text-center'>
                    15 Jan
                </div>
                <h3 className='text-xl font-bold'>Google inks pact for new 35-storey office</h3>
                <p>That dominion stars lights dominion divide years for fourth have dont stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className='flex items-center gap-x-10'>
                    <span className="flex items-center gap-1" >
                        <HiUser />
                        Name
                    </span>
                    <span className="flex items-center gap-1" >
                        <HiMiniCalendarDays />
                        date
                    </span>
                    <span className="flex items-center gap-1" >
                        <HiMiniChatBubbleOvalLeft />
                        Comments
                    </span>
                </div>
            </CardBody>
        </Card>
    );
};

export default SingleCard;