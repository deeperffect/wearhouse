import Container from "@components/Container"
import Image from "next/image"

const Searchbar = () => {
  return (
    <Container>
      <div className="flex gap-2 items-center">
        <label htmlFor="search">
          <Image src="/assets/icons/search.svg" width={30} height={20} alt="Search" />
        </label>
        <input className="m-4 p-1.5 rounded-md w-full" type="text" placeholder="Search.." id="search" />
      </div>
    </Container>
  )
}

export default Searchbar