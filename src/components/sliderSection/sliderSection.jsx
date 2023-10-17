'use client'
import style from './sliderSection.module.css'
import SliderComponents from '../slider/slider';
import { HiMiniCalendarDays, HiOutlineChatBubbleOvalLeft, HiOutlineUser } from "react-icons/hi2";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';

const SliderSection = () => {
    return (
        <div className={style.hero_slider_wrapper}>
            <div className={style.slider_responsive}>
                <SliderComponents />
            </div>
            <div className={style.hero_card_home}>
                <Card className={style.card}>
                    <CardBody className={style.card_body}>
                        <Button color='primary' className={style.button} variant='shadow'>
                            Read More
                        </Button>
                        <h4 className={style.card_h4}>Your checklist for better sleep</h4>

                    </CardBody>

                    <Image
                        removeWrapper
                        className={style.card_img}
                        src="https://source.unsplash.com/random/800x450" alt="card-image" />
                    <div className={style.shap}></div>
                    <CardFooter className={style.card_footer}>
                        <div className={style.card_content_footer}>
                            <span className='flex gap-1 items-center'>
                                <HiOutlineUser />
                                user Name
                            </span>
                            <span className='flex gap-1 items-center'>
                                <HiMiniCalendarDays />
                                date
                            </span>
                            <span className='flex gap-1 items-center'>
                                <HiOutlineChatBubbleOvalLeft />
                                comments
                            </span>
                        </div>
                    </CardFooter>
                </Card>
                <Card className={style.card}>
                    <CardBody className={style.card_body}>
                        <Button color='primary' className={style.button} variant='shadow'>
                            Read More
                        </Button>
                        <h4 className={style.card_h4}>Your checklist for better sleep</h4>

                    </CardBody>

                    <Image
                        removeWrapper
                        className={style.card_img}
                        src="https://source.unsplash.com/random/800x450" alt="card-image" />
                    <div className={style.shap}></div>
                    <CardFooter className={style.card_footer}>
                        <div className={style.card_content_footer}>
                            <span className='flex gap-1 items-center'>
                                <HiOutlineUser />
                                user Name
                            </span>
                            <span className='flex gap-1 items-center'>
                                <HiMiniCalendarDays />
                                date
                            </span>
                            <span className='flex gap-1 items-center'>
                                <HiOutlineChatBubbleOvalLeft />
                                comments
                            </span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default SliderSection;