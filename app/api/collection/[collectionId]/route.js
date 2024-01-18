import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function GET(request) {
  await connectDB()
  const url = request.url
  const itemIdRegex = /\/collection\/(\w+)/
  const itemId = url.match(itemIdRegex)[1]
  const itemFound = await Item.findById(itemId)
  return new Response(JSON.stringify(itemFound))
}