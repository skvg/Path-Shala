import React from 'react'

const selectItem = (props) => {
    var optionRows = [];
    for(var i=0;i<props.size;i++){
        optionRows.push(<option value = {props.optionName[i]}>{props.optionName[i]}</option>)
    }
    return (
        <div className = "SelectItem">
            <label>{props.name}</label>
            <select name={props.name} id={props.name} onChange ={props.onChange}>{optionRows}</select>
        </div>
    )
}

export default selectItem
