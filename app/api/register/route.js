import { User } from '@models/User';
import { connectToDB } from '@utils/database';

export async function POST(request) {
  await connectToDB()

  try {
    const data = await request.json()
    const { name, email, password } = data
    const user = {
      name: name,
      email: email,
      password: password
    }

      await User.create(user); 
      return new Response(JSON.stringify([user, null]))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify([null, error]))
  }
}