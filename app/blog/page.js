'use client'
import { AuthContext } from "@app/contexts/AuthContext";
import Section from "@components/Section";
import Blogs from "@components/shared/Blog/Blogs";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";


const Blog = () => {
	const { user } = useContext(AuthContext);
	const [blogsUser, setBlogsUser] = useState([]);
	const [blogsOfficial, setBlogsOfficial] = useState([]);
	useEffect(() => {
		async function fetchBlogs() {
			try {
				const response = await fetch('/api/blog', { method: "GET" });
				const data = await response.json();
				const { userBlogs, officialBlogs } = data;
				setBlogsUser(userBlogs);
				setBlogsOfficial(officialBlogs);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			};
		};
		fetchBlogs();
	}, []);

  return ( 
    <div className="bg-white/50">
      <div className="max-w-full">   
        <figure>
          <Image src="/assets/images/pic1.jpg" alt="pic1" width={3000} height={36} />
        </figure>   
        <header className="pt-8 text-center mb-12">
          <h2 className="text-3xl uppercase font-bold">Learn more about different styles</h2>
          <h2 className="p-4 text-2xl uppercase font-bold mb-4">or</h2>
          <Link href={user? "/blog/create" : "/login"} className="text-xl uppercase font-bold rounded-full hover:bg-lightOrange bg-darkOrange p-3 px-6">Show your Own Style</Link>
        </header>  
      </div>
      <div className="bg-slate-200/50 pb-8">
        <Section>            
            <h2 className="py-4 font-bold text-2xl text-center md:text-start">Official posts</h2>
            <Blogs blogs={blogsOfficial} className="gap-4 md:grid grid-cols-3"/> 
        </Section>
      </div>
      <Section>
          <h2 className="py-4 font-bold text-2xl text-center md:text-start">User posts</h2>                 
          <Blogs blogs={blogsUser} className="gap-4 md:grid grid-cols-3"/>
      </Section>  
    </div>
  )
};

export default Blog;