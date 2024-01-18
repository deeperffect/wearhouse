import connectDB from "@app/utils/connectDB"
import Item from "@models/Item"

export async function DELETE(request) {
  await connectDB()
  const url = request.url
  const collectionIdRegex = /\/collection\/(\w+)/
  const itemId = url.match(collectionIdRegex)[1]
  await Item.findByIdAndDelete(itemId)
  return new Response(JSON.stringify('item deleted'))
}