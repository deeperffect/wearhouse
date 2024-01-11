import User from '@models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import connectDB from '@app/lib/connectDB.js';

export async function POST(request) {
  await connectDB()

  const data = await request.json()
  const { name, email, password } = data
  //hash password
  const hashedPassword = bcrypt.hashSync(password, 10)
  const user = {
    name: name,
    email: email,
    password: hashedPassword
  }
  try {
    await User.create(user)
    const currentUser = await User.findOne({ email })
    // jwt token
    const SECRET = '72439b26-2bce-4735-a60b-6e9bcd81ee9c'
    const payload = {
      _id: currentUser.id,
      email: currentUser.email
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: '3d'})
    console.log('back', token)
    return new Response(JSON.stringify(token))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error))
  }
}