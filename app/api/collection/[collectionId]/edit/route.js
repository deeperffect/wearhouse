import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function PATCH(request) {
  await connectDB()
  const data = await request.json()
  const collectionId = data.collectionId
  const itemData = data.itemData
  const itemFound = Item.findById(collectionId)
  console.log(itemFound)
  console.log(collectionId)
  return new Response(JSON.stringify('item updated'))
}