import React from 'react'
import Button from '../components/Button.js'

const CourseDetailsPopup = (props) => {
    return (
        <div class = "popup">
            <img src = {props.img} height = "100px" width = "100px" alt = "" />
            <h1>{props.name}</h1>
            <h2>{props.teacherId}</h2>
            <Button text = "cancel" onClick = {props.cancelClick} />
        </div>
    )
}

export default CourseDetailsPopup
