import BlogCard from "./BlogCard";

const Blogs = ({blogs, className}) => {

	return (
		<div className={`${className}`}>
			{
				blogs ? (blogs.map((card, index) => (
					<BlogCard card={card} key={index} />
				))) : (
					<div>No  blogs have been created yet.</div>
				)
			}
		</div>
	)
};

export default Blogs;
