// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group overflow-hidden"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg relative">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt={blog?.title || "Blog cover image"}
          priority={false}
          loading="lazy"
          className='h-full w-full group-hover:scale-110 transition-all duration-300 object-cover'
          placeholder="blur"
          blurDataURL="data:image/jpeg,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDA=="
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <time dateTime={blog.published_at} className="text-xs sm:text-sm">{timeConverter(blog.published_at)}</time>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1" aria-label={`${blog.public_reactions_count} reactions`}>
              <BsHeartFill aria-hidden="true" />
              <span>{blog.public_reactions_count}</span>
            </span>
            {blog.comments_count > 0 &&
              <span className="flex items-center gap-1" aria-label={`${blog.comments_count} comments`}>
                <FaCommentAlt aria-hidden="true" />
                <span>{blog.comments_count}</span>
              </span>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url} rel="noopener noreferrer">
          <h3 className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 transition-colors duration-300 line-clamp-2'>
            {blog.title}
          </h3>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]' aria-label="Reading time">
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;