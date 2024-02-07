import connectDB from "@app/utils/connectDB"
import BlogPost from "@models/BlogPost"

export async function POST(request) {
	await connectDB();
	const data = await request.json();
	const { image, title, description, owner } = data;
	const newPost = {
		image,
		title,
		description,
		owner: owner
	};
	try {
		await BlogPost.create(newPost);
		return new Response(JSON.stringify(newPost));
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ error: 'Create blog post failed' }), { status: 500 });
	};
};