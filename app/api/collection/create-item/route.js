import connectDB from "@app/utils/connectDB"
import Item from "@models/Item"

export async function POST(request) {
  await connectDB()

  const data = await request.json()
  const { title, description, price, image, size, sex, category, owner } = data
  const newItem = {
    title,
    description,
    price,
    image,
    size,
    sex,
    category,
    owner
  }

  const createdItem = await Item.create(newItem)
  console.log(createdItem)
  return new Response(JSON.stringify(newItem))
}