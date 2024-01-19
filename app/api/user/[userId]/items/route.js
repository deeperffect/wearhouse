import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function GET(request, params) {
  await connectDB()
  const userId = params.params.userId
  const userItems = await Item.find({owner: userId})
  return new Response(JSON.stringify(userItems))
}