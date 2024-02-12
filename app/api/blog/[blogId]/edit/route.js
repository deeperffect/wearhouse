import connectDB from "@app/utils/connectDB";
import BlogPost from "@models/BlogPost";
export async function PATCH(request) {
	await connectDB();
	const { blogData, blogId } = await request.json();

	if (!blogId) {
		console.log("Invalid blogId");
		return new Response(JSON.stringify({ error: 'Invalid BlogId' }), { status: 400 });
	}
	try {
		const blogFound = await BlogPost.findByIdAndUpdate(blogId, blogData);
		if(!blogFound) {
			console.log('Blog post not found');
			return new Response(JSON.stringify({ error: 'Blog post not found' }), { status: 404 });
		};
		return new Response(JSON.stringify(blogFound));
	} catch (error) {
		console.log('Update blog post failed:', error);
		return new Response(JSON.stringify({ error: 'Update blog post failed' }), { status: 500 });
	};
};