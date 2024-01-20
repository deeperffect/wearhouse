import connectDB from "@app/utils/connectDB"
import Item from "@models/Item"

export async function DELETE(request, params) {
  await connectDB()
  const itemId = params.params.collectionId
  if(!itemId) {
    console.log('no item found')
    return
  }
  try {
    await Item.findByIdAndDelete(itemId)
    return new Response(JSON.stringify('item deleted'))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({error: 'Error deleting item'}))
  }
}