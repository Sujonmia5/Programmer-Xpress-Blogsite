'use client'

import { Button, Card, CardBody, Link } from "@nextui-org/react";
import style from './blogCard.module.css'
import { HiMiniCalendarDays, HiMiniChatBubbleOvalLeft, HiUser } from "react-icons/hi2";
import Image from "next/image";

const BlogCard = () => {

    return (
        <Card
            className={style.blog_card}>
            <div className={style.card_img}>
                <div>
                    <img src="https://i.ibb.co/sy5snfX/mobile-banner-2015-nissan-juke.jpg" alt="image" />
                </div>
            </div>
            <CardBody className={style.card_content}>
                <h3>
                    <Link href="" size="lg">Project title</Link>
                </h3>
                <div className={style.blog_info}>
                    <span className="" >
                        <HiUser />
                        Name
                    </span>
                    <span className="" >
                        <HiMiniCalendarDays />
                        date
                    </span>
                    <span className="" >
                        <HiMiniChatBubbleOvalLeft />
                        Comments
                    </span>
                </div>
                <p className="my-2 -text-px-gray text-ellipsis">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, commodi. Ex maiores velit delectus at facere culpa quibusdam dolorum magni quia...
                </p>
                <div>
                    <Button
                        color="danger"
                        variant="light"
                        disableRipple
                        disableAnimation
                        className="rounded h-8 -text-px-primaryColor text-lg">
                        <Link href="/">Read More..</Link>
                    </Button>
                </div>
            </CardBody>
        </Card >
    );
};

export default BlogCard;