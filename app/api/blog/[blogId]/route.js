import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";

export async function GET(request, params) {
	await connectDB();
	const blogId = params.params.blogId;
	try {
		const blogFound = await BlogPost.findById(blogId);
		if(!blogFound) {
			console.log('Blog post not found');
			return new Response(JSON.stringify({ error: 'Blog post not found' }), { status: 404 });
		};
		return new Response(JSON.stringify(blogFound));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: 'Error fetching blog' }), { status: 500 });
	};
};