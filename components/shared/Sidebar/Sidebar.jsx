import Section from "@components/Section"
import SidebarItems from "./SidebarItems"

const Sidebar = () => {
  return (
    <div className="bg-gray-200 max-w-fit p-6 h-svh absolute">
        <SidebarItems />
    </div>
  )
}

export default Sidebar