import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function PATCH(request) {
  await connectDB()
  const data = await request.json()
  const collectionId = data.collectionId
  const itemData = data.itemData
  const itemFound = await Item.findByIdAndUpdate(collectionId, itemData)
  return new Response(JSON.stringify(itemFound))
}