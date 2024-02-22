'use client'
import Section from "@components/Section";
import BackArrow from "@components/shared/BackArrow";
import BlogDetails from "@components/shared/Blog/BlogDetails";
import Loader from "@components/shared/Loader";
import { Suspense, useEffect, useState } from "react";


const BlogDetailsPage = ({ params }) => {
	const [blog, setBlog] = useState({});

	useEffect(() => {
		async function fetchBlog() {
			try{
				const response = await fetch(`/api/blog/${params.blogId}`, {method: "GET"});
				const blogFound = await response.json(); 
				setBlog(blogFound) ; 
			} catch (error) {
				console.log("Error fetching blog:", error);
			}
		}
		fetchBlog();
	}, []);
  
	return (
		<div className="bg-white/50">
			<Section>
				<BackArrow />
				<Suspense fallback={<Loader />}>
					<BlogDetails blog={blog} setBlog={setBlog}/>
				</Suspense>
			</Section>
		</div>
	)
};

export default BlogDetailsPage;