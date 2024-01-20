import connectDB from "@app/utils/connectDB";
import Item from "@models/Item";

export async function GET(request, params) {
  await connectDB()
  const category = params.params.category
  console.log(category)
  try {
    if(category === 'all') {
      const allItems = await Item.find()
      return new Response(JSON.stringify(allItems))
    }
    const filteredItems = await Item.find({ category: category })
    if (filteredItems.length === 0) {
      console.log('No items found')
      return new Response(JSON.stringify({ message: 'No items found' }, { status: 404 }))
    }
    return new Response(JSON.stringify(filteredItems))
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Error fetching items' }), { status: 500 })
  }
}