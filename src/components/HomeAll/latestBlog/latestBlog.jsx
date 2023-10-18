import BlogCard from '@/components/blogCard/blogCard';
import style from './latestBlog.module.css'


const LatestBlog = () => {
    return (
        <div className='w-full'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    );
};

export default LatestBlog;