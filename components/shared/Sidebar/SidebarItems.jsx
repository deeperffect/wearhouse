import { CATEGORIES } from "@constants/selectOptions"
import Link from "next/link"

const SidebarItems = () => {
  return (
    <nav>
      <h3 className="pb-2 font-bold border-b-2 border-current">Category</h3>
      <ul className="flex flex-col gap-2 pt-2">
        {CATEGORIES.map(({value, text}) => {
          return (
            <li key={value}>
              <Link href={value}>{text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SidebarItems