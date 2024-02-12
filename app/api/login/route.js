import connectDB from "@app/utils/connectDB";
import User from "@models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export async function POST(request) {
	await connectDB();
	const SECRET = process.env.NEXT_PUBLIC_SECRET;
	const userData = await request.json();
	const { email, password } = userData;

	try {
		const user = await User.findOne({ email });
		if (user) {
			const validPassword = await bcrypt.compare(password, user.password);
			if (validPassword) {
				const payload = {
				_id: user.id,
				email: user.email,
				};
				const token = jwt.sign(payload, SECRET, { expiresIn: '3d' });
				return new Response(JSON.stringify(token));
			} else {
				return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
			};
		} else {
		return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
		};
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: 'Login failed' }), { status: 500 });
	};
};