import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function GET(request) {
  await connectDB()
  const allItems = await Item.find()
  return new Response(JSON.stringify(allItems))
}