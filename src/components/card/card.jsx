import { Card, CardBody, Image } from '@nextui-org/react';
import style from './card.module.css'
import { Roboto_Font } from '@/fonts/fonts';
import { HiMiniCalendarDays } from 'react-icons/hi2';

const SingleCard = ({ item }) => {
    const { title, date_time, images } = item
    console.log(item);
    return (
        <a href="/" className='w-full'>
            <Card
                classNames={{
                    base: 'rounded-sm shadow-md hover:shadow-foreground-400'
                }}
                className={`${Roboto_Font.className, style.single_card} mx-auto `}
            >
                <Image width={370} height={160} classNames={{
                    img: `${style.Card_img} object-cover w-full`,
                    wrapper: 'overflow-hidden rounded-none',
                }} src={images[0]} />
                <CardBody className='pt-2 px-4 space-y-2'>
                    <h1 className='text-2xl font-medium uppercase'>{title}</h1>
                    <div>
                        <p className='flex items-center justify-between text-xs -text-px-gray'>
                            <strong>Programmer Xpress</strong>
                            <span className='flex items-center font-sans'>
                                <HiMiniCalendarDays />
                                Date: {date_time}</span>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </a>
    );
};

export default SingleCard;