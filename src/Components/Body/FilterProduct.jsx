import React from "react";


export default function FilterCategory(props) {


    const onChange = function (event) {
        props.onChange(event.target.value)
    }

    return(
        <div>
            <dropDown onChange={onChange}>
                <option value="" selected>All</option>
                {props.values.map((v)=> <option value={v}>{v}</option>)}
            </dropDown>

        </div>
    )

}


