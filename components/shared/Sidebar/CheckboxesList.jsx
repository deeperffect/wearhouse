import Checkbox from "./Checkbox"

const CheckboxesList = ({ listChecks, handleChange }) => {
    return (
          <div>
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
    )
}

export default CheckboxesList