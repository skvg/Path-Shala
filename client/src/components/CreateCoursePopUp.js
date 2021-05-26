import React from 'react'
import InputBox from './InputBox.js'
import Button from './Button.js'

const CreateCoursePopUp = (props) => {
    return (
        <div className = "popup">
            <InputBox name = "Course Name" placeholder = "type the name of course" onChange = {props.onChange} />
            <Button className ="Button" type = "submit" text = "Create" onClick = {props.onClick} />
            <Button className ="Button_red" type = "submit" text = "Cancel" onClick = {props.cancelClick} />
        </div>
    )
}

export default CreateCoursePopUp
