import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { BlogPost } from '@/lib/models/blog';
import blogData from '@/data/blogData';
import TrackedLink from '@/components/tracked-link';

const Blog: React.FC = () => {
  type BlogCardProps = {
    post: BlogPost;
  };

  const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
    <TrackedLink
      href={post.mediumUrl}
      event={'blogpost_clicked'}
      eventData={{ title: post.title, url: post.mediumUrl }}
    >
      <Card className={'flex flex-col hover:shadow-lg hover:cursor-pointer'}>
        <CardHeader className={'min-h-0 md:min-h-28'}>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.subtitle}</CardDescription>
        </CardHeader>
        <div className="flex-grow"></div>
        <CardContent>
          <div className="flex justify-center">
            <Image
              src={post.imageSrc}
              alt={post.title + ' thumbnail'}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </CardContent>
      </Card>
    </TrackedLink>
  );

  return (
    <div
      id="blog"
      className="flex flex-col min-h-screen justify-center items-center p-4 py-10 light bg-background text-foreground"
    >
      <h1 className="text-center pt-7 text-5xl font-bold">I love writing</h1>
      <h1 className="text-center pt-5 text-xl">Read some of my most popular blog posts on Medium</h1>

      <div
        className={
          'pt-10 px-0 sm:px-5 lg:px-10 xl:px-20 2xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'
        }
      >
        {blogData.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
