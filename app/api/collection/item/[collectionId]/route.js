import connectDB from "@app/utils/connectDB"
import Item from "@models/Item"

export async function GET(request, params) {
  await connectDB()
  
  const itemId = params.params.collectionId
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