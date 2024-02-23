import Checkbox from "./Checkbox"

const CheckboxesList = ({ listChecks, handleChange, title="" }) => {
    return (
          <div className="gap-4">
            {
                !!title.length && <h3 className="pb-2 border-b-2 border-current font-bold">{title}</h3>
            }
            <div className="pt-2">
                {
                    listChecks.map((listItem) => {
                        return(
                            <Checkbox
                                key={`check_${listItem.value}`}
                                id={listItem.value}
                                text={listItem.text}
                                handleChange={handleChange}
                                checked={listItem.checked}
                                />
                                )
                            })
                        }
            </div>
        </div>
    )
}

export default CheckboxesList