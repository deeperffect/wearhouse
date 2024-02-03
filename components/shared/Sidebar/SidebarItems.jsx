import { CATEGORIES } from "@constants/selectOptions"
import Link from "next/link"

const SidebarItems = () => {
  return (
    <nav className="flex flex-col gap-8 text-black">
      <ul>
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