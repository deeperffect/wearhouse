import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function GET(request) {
  await connectDB()
  try {
    const allItems = await Item.find()
    return new Response(JSON.stringify(allItems))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Error fetching items' }), { status: 500 })
  }
}