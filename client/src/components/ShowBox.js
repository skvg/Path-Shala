import axios from 'axios'
import React from 'react'
import Button from '../components/Button.js'

class ShowBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('savedToken'),
            course: this.props.course,
            checked: false,
            text: 'subscribe',
            className: 'Button',
            logout: false,
            user: this.props.user,
        }
        this.check = this.check.bind(this)
        this.subscribeCourse = this.subscribeCourse.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        this.props.changeCourseInfo(this.state.course)
    }
    check() {
        const courses = this.state.user.courses
        var flag = false
        courses.map((course)=> {
            if(course.course === this.state.course._id){
                flag = true
            }
        })
        if(flag){
            this.setState({text: 'Unsubscribe', checked: true, className: 'Button_red'})
        }
    }
    subscribeCourse() {
        const authToken = ('Bearer ').concat(this.state.token)
        axios.post(`${process.env.REACT_APP_HOST}/user/course`, {courseId: this.state.course._id},{headers: {"Authorization" : authToken}})
        .then((res) => {
            this.setState({text: 'Unsubscribe', user: res.data.user, className: 'Button_red'})
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render () {
        if(this.state.course && !(this.state.checked)){
            this.check()
        }
        return (
            <div className = "showbox">
                <div className = "showbox_div" onClick = {this.props.onClick} >
                    <img src = {this.props.profilePic} alt =''/>
                    <h3>{this.props.name}</h3>
                    {
                        (this.state.user.profession === 'student' && this.state.course) &&
                        <Button className={this.state.className} text = {this.state.text} onClick = {this.subscribeCourse}/>
                    }
                    {
                        this.state.course &&
                        <Button text = "Open" className = "Button" onClick = {this.onClick} />
                    }
                </div>
            </div>
        )
    }
}

export default ShowBox
