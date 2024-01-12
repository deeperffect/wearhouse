import Section from "@components/Section"
import OfficialBlogs from "@components/shared/OfficialBlogs"
import Searchbar from "@components/shared/Searchbar"
import Image from "next/image"
import Link from "next/link"

const Blog = () => {
  return (
    <div>
      <Section>
        <div className="max-w-[40rem] mx-auto">
          <Image src="/assets/images/pic1.jpg" alt="pic1" width={1024} height={36} />
          <h2 className="text-3xl uppercase text-center font-bold">Learn more about different styles</h2>
          <h2 className="p-2 text-2xl uppercase text-center font-bold">or</h2>
          <div className="text-3xl uppercase text-center font-bold" >
            <Link href="/blog/create">Show your Own Style</Link>
          </div>
        </div>
      </Section>
      <Searchbar />
      <div className="flex justify-between mt-8">
        <Section>
          <h2 className="text-xl font-bold">Official posts</h2>
          <OfficialBlogs />
        </Section>
        <Section>
          <h2 className="text-xl font-bold">User posts</h2>
        </Section>
      </div>
    </div>
    
  )
}

export default Blog