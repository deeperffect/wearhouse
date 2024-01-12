import connectDB from "@app/lib/connectDB"
import Item from "@models/Item"

export async function POST(request) {
  await connectDB()

  const data = await request.json()
  const { title, description, price, image, category } = data

  const newItem = {
    title,
    description,
    price,
    image,
  }

  await Item.save(newItem)



  return new Response(JSON.stringify())
}