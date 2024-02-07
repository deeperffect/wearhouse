import { useState } from "react";

const BlogsFilter = () => {
	const [category, setCategory] = useState('topRated');

	return (
		<select className="text-black p-1 rounded-xl" value={category} onChange={(e) => setCategory(e.target.value)}>
			<option value='topRated'>Top rated</option>
			<option value='latest'>Latest</option>
		</select>
	)
};

export default BlogsFilter;