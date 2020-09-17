import React, {createRef} from "react";


const Sort = (props) => {
    const onSortedBy = () => props.sortedBy(selectRef.current.value)
    let selectRef = createRef();
    return (
        <div>sort by:
            <select ref={selectRef} value={props.sortBy} onChange={onSortedBy}>
                <option value='name'>Name</option>
                <option value='cost'>Cost</option>
            </select>
        </div>
    )
}

export default Sort;