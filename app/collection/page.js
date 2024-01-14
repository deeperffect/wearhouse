import Section from "@components/Section"
import Items from "@components/shared/Items"
import Searchbar from "@components/shared/Searchbar"


const Collection = () => {
  return (
    <>
      <Section>
        <h2 className="text-center font-bold text-3xl py-4">Collection</h2>
      </Section>
      <Searchbar />
      <Section>
        <div className="grid grid-cols-3">
          <Items />
        </div>
      </Section>
    </>
  )
}

export default Collection