import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function PATCH(request) {
  await connectDB()
  const { itemData, collectionId } = await request.json()
  const itemFound = await Item.findByIdAndUpdate(collectionId, itemData)
  return new Response(JSON.stringify(itemFound))
}