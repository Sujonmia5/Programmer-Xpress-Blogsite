'use client'
import { BsEyeFill } from 'react-icons/bs'
import { RiCodeBoxFill } from 'react-icons/ri'
import LoadingCard from "@/components/card/loading";
import { Button, Image, Input, User } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const DetailsProject = ({ params, searchParams }) => {
    console.log(params, searchParams);

    const { data, isLoading, error } = useQuery({
        queryKey: ['details'],
        queryFn: async () => {
            const res = await fetch(`${process.env.FETCH_URI}details?id=${searchParams.id}`);
            const data = await res.json()
            return data
        }
    })
    console.log(data?.comments);
    if (isLoading) {
        return <LoadingCard />
    }

    return (
        <div className="my-5 shadow-md px-1 md:p-5">
            {/* Details head title */}
            <div className="">
                <h1 className="text-3xl md:text-4xl capitalize">{data?.title}</h1>
                <div className="flex gap-5 text-sm my-2">
                    <p>By <strong>
                        <Link href={'https://www.youtube.com/@ProgrammerXpress'}>Programmer Xpress</Link>
                    </strong></p>
                    <span>{data?.date_time}</span>
                </div>
            </div>

            <div className="h-52 flex items-center justify-center text-6xl border my-5">
                google ads
            </div>
            <Image
                classNames={{
                    wrapper: "w-full rounded-none",
                    img: 'rounded-none'
                }} src={`${data?.images[0]}`} />
            <div className="py-5 text-justify">
                <p>
                    As a beginner in web development, creating a simple yet responsive website can be an exciting and educational project. It is a great way to learn the basics of HTML fundamentals and CSS styles and gain practical experience in creating and designing a website.
                    <br />
                    <br />
                    In this blog post, I will guide you through the process of creating an attractive, responsive coffee website using HTML and CSS. My website will focus on a coffee theme, but you can customize it. By creating this website, not only will you learn to create a website, but you’ll also learn how to structure web content properly and apply styling to make it responsive to different screen sizes.
                    <br />
                    <br />
                    To create our coffee website, we will use common HTML elements like header, navigation bar (nav), ul, li, a, and button, along with some basic CSS properties to style and make our website responsive and attractive. So as a beginner, you should have no trouble following the steps and understanding the codes.
                </p>
            </div>
            <Image classNames={{
                wrapper: "w-full rounded-none",
                img: 'rounded-none'
            }} src={`${data?.images[1]}`} />
            <div className="py-5 text-justify">
                <p>
                    As a beginner in web development, creating a simple yet responsive website can be an exciting and educational project. It is a great way to learn the basics of HTML fundamentals and CSS styles and gain practical experience in creating and designing a website.
                    <br />
                    <br />
                    In this blog post, I will guide you through the process of creating an attractive, responsive coffee website using HTML and CSS. My website will focus on a coffee theme, but you can customize it. By creating this website, not only will you learn to create a website, but you’ll also learn how to structure web content properly and apply styling to make it responsive to different screen sizes.
                    <br />
                    <br />
                    To create our coffee website, we will use common HTML elements like header, navigation bar (nav), ul, li, a, and button, along with some basic CSS properties to style and make our website responsive and attractive. So as a beginner, you should have no trouble following the steps and understanding the codes.
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20">
                <Button
                    color="primary"
                    variant="solid"
                    className="-text-px-white uppercase"
                    startContent={<BsEyeFill className='w-5 h-5' />}
                >view live demo</Button>
                <Button
                    color="primary"
                    variant="solid"
                    className="-text-px-white uppercase"
                    startContent={<RiCodeBoxFill className='w-5 h-5' />}
                >Source file</Button>
            </div>
            <div className="h-52 flex items-center justify-center text-6xl border my-5">
                google ads
            </div>
            <div className='w-full flex gap-2 flex-wrap'>
                <h4 className='-bg-px-primaryColor inline-block px-2'>Tags:</h4>
                {
                    data?.tags.map((tag, i) => <a href={`#${tag}`} className='text-base -bg-px-gray-dark -text-px-light transition-all hover:-text-px-primaryColor px-1' key={i}>#{tag}</a>)
                }
            </div>

            <div className='my-5'>
                <h4 className=' text-xl capitalize font-sans'>{data?.comments?.length} Comment</h4>
                <hr />
                <div className='my-5'>
                    {
                        data?.comments?.map((data, i) => <div key={i}>
                            <User
                                name={data?.comment}
                                description={`Name: ${data?.user?.name}`}
                                avatarProps={{
                                    src: `${data?.user?.image ? `${data?.user?.image}` : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}`
                                    ,
                                    size: 'lg',
                                    classNames: {
                                        name: `${data?.user?.name}`,
                                    }
                                }}
                                classNames={{
                                    name: 'text-xl capitalize',
                                    base: 'space-y-4',
                                    description: 'text-base',
                                }}
                            />
                        </div>)
                    }
                </div>
                <div className='flex justify-start items-center'>
                    <form action="" className='space-y-2 w-[300px]' >
                        <div>
                            <Input
                                color="secondary"
                                type="email"
                                variant="bordered"
                                radius="sm"
                                label='Your Name'
                                isRequired
                                // placeholder="write comment"
                                classNames={{
                                    label: '-text-px-white',
                                    input: [
                                        '-bg-px-dark font-serif'
                                    ],
                                    inputWrapper: [
                                        '-border-px-secondary'
                                    ],

                                }}
                            />
                        </div>
                        <div>
                            <Input
                                color="secondary"
                                type="email"
                                variant="bordered"
                                isRequired
                                radius="sm"
                                label='Write comment'
                                // placeholder="write comment"
                                classNames={{
                                    label: '-text-px-white',
                                    input: [
                                        '-bg-px-dark font-serif'
                                    ],
                                    inputWrapper: [
                                        '-border-px-secondary'
                                    ],

                                }}
                            />
                        </div>
                        <div>
                            <Button color='primary' variant='solid' className='-text-px-white'>Comment Post</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailsProject;
