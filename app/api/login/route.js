import { User } from "@models/User";
import { connectToDB } from "@utils/database";

export async function POST(request) {
  await connectToDB()
  const userData = await request.json()
  const  {email, password } = userData
  try{
    const user = await User.findOne({ email })
    const validPassword = null
    const loggedIn = false
    if(user) { 
      validPassword = user.password === password
    }

    if(validPassword) {
      loggedIn = true
    }
  }
  
  console.log(email, password)
  return new Response(JSON.stringify([userData, null]))
}