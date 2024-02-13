'use client'
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const LatestBlogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		async function fetchBlogs() {
			try {
				const response = await fetch(`/api/blog/latest?limit=6`, { method: "GET" });
				const data = await response.json();
				if (data.length === 0) {
				console.log('No blogs found')
				return
				};
				setBlogs(data);
			} catch (error) {
				console.log("Error fetching blogs:", error);
			}
		
		}

		fetchBlogs();
	}, []);

	return (
		<>
			{blogs.length > 0 ? (blogs.map((card, index) => (
				<BlogCard card={card} key={index} />
				))) : (
					<div>No blogs to display.</div>
				)
			}
		</>
  )
}

export default LatestBlogs;