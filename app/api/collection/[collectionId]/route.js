import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function GET(request) {
  await connectDB()
  const url = request.url
  const itemIdRegex = /\/collection\/(\w+)/
  const itemId = url.match(itemIdRegex)[1]
  try {
    const itemFound = await Item.findById(itemId)
    if(!itemFound) {
      console.log('Item not found')
      return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 })
    }
    return new Response(JSON.stringify(itemFound))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Error fetching blog' }), { status: 500 })
  }
}