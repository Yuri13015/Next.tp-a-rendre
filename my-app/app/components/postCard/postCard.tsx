import Image from "next/image";
import Link from "next/link";

interface Post {
    img: string;
    createdAt?: string;
    title: string;
    body: string;
    slug: string;
  }

const PostCard = ({ post }: { post: Post }) => {  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        {post.img && (
          <div className="w-11/12 h-[400px] relative">
            <Image src={post.img} alt="" layout="fill" objectFit="cover" />
          </div>
        )}
        <span className="text-xs self-center transform -rotate-90 mx-auto">{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className="flex flex-col">
        <h1 className="w-11/12 text-2xl mb-5">{post.title}</h1>
        <p className="w-11/12 mb-5 font-light text-gray-500">{post.body}</p>
        <Link href={`/blog/${post.slug}`} className="underline">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
