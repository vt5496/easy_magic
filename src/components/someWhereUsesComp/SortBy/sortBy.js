import React, {createRef} from "react";


const Sort = ({sortBy, sortedBy}) => {
    const onSortedBy = () => sortedBy(selectRef.current.value)
    let selectRef = createRef();
    return (
        <div>sort by:
            <select ref={selectRef} value={sortBy} onChange={onSortedBy}>
                <option value='name'>Name</option>
                <option value='cost'>Cost</option>
            </select>
        </div>
    )
}

export default Sort;