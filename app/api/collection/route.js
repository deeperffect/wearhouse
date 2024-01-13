import connectDB from "@app/lib/connectDB";
import Item from "@models/Item";

export async function GET(request) {
  await connectDB()
  const allItems = await Item.find()
  return new Response(JSON.stringify(allItems))
}