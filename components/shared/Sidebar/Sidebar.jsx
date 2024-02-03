import React, { useContext } from 'react'
import SidebarItems from "./SidebarItems"
import CheckboxesList from "./CheckboxesList"
import { CheckboxesContext } from '@app/contexts/CheckboxesContext'

const Sidebar = () => {    
    const MemoizedFilterCheckboxes = React.memo(CheckboxesList, (prevProps, nextProps) => {
        return prevProps.listChecks === nextProps.listChecks && prevProps.handleChange === nextProps.handleChange
    })
    const { sexesArray, sizesArray, handleChangeSexes, handleChangeSizes } = useContext(CheckboxesContext)

    return (
        <div className="bg-gray-200 max-w-fit p-6 h-svh border-r-4 border-t-4 border-slate-600">
            <SidebarItems />
            <MemoizedFilterCheckboxes handleChange={handleChangeSexes} listChecks={sexesArray} />
            <MemoizedFilterCheckboxes handleChange={handleChangeSizes} listChecks={sizesArray} />
        </div>
    )
}

export default Sidebar