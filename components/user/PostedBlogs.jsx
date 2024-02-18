'use client'

import { AuthContext } from "@app/contexts/AuthContext";
import BlogCard from "@components/shared/Blog/BlogCard";
import { useContext, useEffect, useState } from "react";

const PostedBlogs = () => {
	const { user } = useContext(AuthContext);
	const [userBlogs, setUserBlogs] = useState([]);

	useEffect(()=> {

	async function fetchUserBlogs() {
		if(user && user.id) {
			const response = await fetch(`/api/user/${user.id}/user-blogs`, {method: "GET"});
			const userlogsFound = await response.json();
			setUserBlogs(userlogsFound);
		};
	};

    fetchUserBlogs();
  }, []);


	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{
				userBlogs && userBlogs.length > 0 ? (userBlogs.map((card, index) => {
					return (
						<BlogCard card={card} key={index} />     
					)
				})) : (
					<div>You have not posted any blogs yet.</div>
					)
				}
		</div>
	)
};

export default PostedBlogs;