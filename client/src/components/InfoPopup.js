import React from 'react'
import Button from './Button.js'

const InfoPopup = (props) => {
    return (
        <div className = "popup">
            <img src = {props.img} alt = ''/>
            <h2>{props.name}</h2>
            <Button type = "submit" text = {props.text} onClick = {props.onClick} />
            <Button type = "submit" text = "Cancel" onClick = {props.cancelClick} />
        </div>
    )
}

export default InfoPopup
