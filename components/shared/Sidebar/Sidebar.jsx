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
        <div className="sticky top-headerHeight h-pageHeight overflow-y-auto text-black bg-white text-sm pt-4 items-center">
            <div className='flex flex-col px-4 gap-4'>
                <SidebarItems />
                <MemoizedFilterCheckboxes handleChange={handleChangeSexes} title='Sex' listChecks={sexesArray} />
                <MemoizedFilterCheckboxes handleChange={handleChangeSizes} title='Size' listChecks={sizesArray} />
            </div>
        </div>
    )
}

export default Sidebar;