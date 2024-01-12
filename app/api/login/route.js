import connectDB from "@app/lib/connectDB";
import User from "@models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  await connectDB()
  const SECRET = process.env.NEXT_PUBLIC_SECRET
  const userData = await request.json()
  const { email, password } = userData

  try {
    const user = await User.findOne({ email })
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password)
      if (validPassword) {
        //jw token
        const payload = {
          _id: user.id,
          email: user.email
        }
        const token = jwt.sign(payload, SECRET, { expiresIn: '3d' })
        return new Response(JSON.stringify(token))
      } else {
        return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 })
      }
      
    } else {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
    }
     
    } catch(error) {
      console.log(error)
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}