import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function PATCH(request) {
  await connectDB()
  const { itemData, collectionId } = await request.json()

  if (!collectionId) {
    console.log("Invalid collectionId")
    return new Response(JSON.stringify({ error: 'Invalid collectionId' }), { status: 400 })
  }

  if (!itemData || Object.keys(itemData).length === 0) {
    console.log('Invalid itemData');
    return new Response(JSON.stringify({ error: 'Invalid itemData' }), { status: 400 });
  }

  try {
    const itemFound = await Item.findByIdAndUpdate(collectionId, itemData)
    if(!itemFound) {
      console.log('Item not found')
      return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 })
    }
    return new Response(JSON.stringify(itemFound))
  } catch (error) {
    console.log('Edit item failed:', error)
    return new Response(JSON.stringify({ error: 'Edit item failed' }), { status: 500 });
  }
}