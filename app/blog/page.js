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
				const { userBlogs, officialBlogs } = data[0];
				setBlogsUser(userBlogs);
				setBlogsOfficial(officialBlogs);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			};
		};
		fetchBlogs();
	}, []);

  return ( 
    <>
      <div className="max-w-full">   
        <figure>
          <Image src="/assets/images/pic1.jpg" alt="pic1" width={2048} height={36} />
        </figure>   
        <header className="pt-8 text-center">
          <h2 className="text-3xl uppercase font-bold">Learn more about different styles</h2>
          <h2 className="p-4 text-2xl uppercase font-bold">or</h2>
          <Link href={user? "/blog/create" : "/login"} className="text-xl uppercase font-bold rounded-full hover:bg-lightOrange bg-darkOrange p-3 px-6">Show your Own Style</Link>
        </header>  
      </div>
      <Section>            
          <h2 className="py-8 text-2xl text-center md:text-start">Official posts</h2>
          <Blogs blogs={blogsOfficial} className="gap-4 md:grid grid-cols-3"/> 
      </Section>
      <Section>
          <h2 className="py-8 text-2xl text-center md:text-start">User posts</h2>                 
          <Blogs blogs={blogsUser} className="gap-4 md:grid grid-cols-3"/>
      </Section>  
    </>
  )
};

export default Blog;