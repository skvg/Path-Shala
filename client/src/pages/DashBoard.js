import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

import SideBar from '../components/SideBar.js'
import Button from '../components/Button.js'
import CreateCoursePopUp from '../components/CreateCoursePopUp.js'
import ShowBox from '../components/ShowBox.js'
import CourseBox from '../components/CourseBox.js'

class dashBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            logout: false,
            token: localStorage.getItem('savedToken'),
            user_available: false,
            courses_avail: false,
            teachers_page: false,
            courses_page: false,
            CreateCoursePopUp: false,
            CourseOrTeacherBoxIsNotOpened: true,
            course_name: '',
            courses_info: [],
            course: {},
            user: {}
        }
        
        this.getUser = this.getUser.bind(this)
        this.reditectToTeachersPage = this.reditectToTeachersPage.bind(this)
        this.reditectToCoursesPage = this.reditectToCoursesPage.bind(this)
        this.CreateCoursePopUp = this.CreateCoursePopUp.bind(this)
        this.createCourse = this.createCourse.bind(this)
        this.onChange = this.onChange.bind(this)
        this.changeCourseOrTeacherBox = this.changeCourseOrTeacherBox.bind(this)
        this.changeCourseInfo = this.changeCourseInfo.bind(this)
    }
    
    reditectToTeachersPage(e) {
        e.preventDefault()
        this.setState({teachers_page: true})
    }
    reditectToCoursesPage(e) {
        e.preventDefault()
        this.setState({courses_page: true})
    }
    CreateCoursePopUp() {
        const CreateCoursePopUp = !(this.state.CreateCoursePopUp)
        this.setState({CreateCoursePopUp: CreateCoursePopUp})
    }
    changeCourseInfo(course){
        this.changeCourseOrTeacherBox(false)
        this.setState({course: course})
    }
    changeCourseOrTeacherBox(value) {
        this.setState({CourseOrTeacherBoxIsNotOpened: value})
    }
    getCourses(){
        const authToken = ('Bearer ').concat(this.state.token)
        axios.get(`${process.env.REACT_APP_HOST}/course`, {headers: {"Authorization" : authToken}})
        .then((res) => {
            console.log(res)
            this.setState({courses_info: res.data, courses_avail: true})
        })
        .catch ((e) => {
            console.log(e)
        })
    }
    getUser (){
        const authToken = ('Bearer ').concat(this.state.token)
        axios.get(`${process.env.REACT_APP_HOST}/user`, {headers: {"Authorization" : authToken}})
        .then((res) => {
            this.setState({user_available: true, user: res.data})
        })
        .catch((e) => console.log(e))
    }
    // new route creation requirement; redirect to another page /dashboard/course_name
    onChange(e) {
        e.preventDefault()
        this.setState({course_name: e.target.value})
    }
    createCourse(e) {
        e.preventDefault()
        const authToken = ('Bearer ').concat(this.state.token)
        const courseObject = {name: this.state.course_name}
        axios.post(`${process.env.REACT_APP_HOST}/course`, courseObject,{headers: {"Authorization" : authToken}} )
        .then((res) => {
            this.CreateCoursePopUp()
            this.setState({courses_avail: false})
        })
        .catch((e) => console.log(e))
    }

    render(){
        if(!this.state.token){
            return (
                <Redirect to = '/' />
            )
        }
        if(this.state.teachers_page){
            return(
                <Redirect to = "/teachers" />
            )
        }
        if(this.state.courses_page){
            return(
                <Redirect to = "/courses" />
            )
        }
        if(!this.state.user_available){
            this.getUser()
        }
        if(!this.state.courses_avail){
            this.getCourses()
        }
        return (
            <div className = 'dashboard'>
                <div className='dashboard_sidebar'>
                    <SideBar user = {this.state.user} changeState = {this.changeCourseOrTeacherBox} />
                </div>

                <div className = "dashboard_taskbox">
                    {
                        this.state.CourseOrTeacherBoxIsNotOpened &&
                        <h1>Hey Champ !!  Let's crack it..</h1>
                    }
                    
                    {
                        this.state.CourseOrTeacherBoxIsNotOpened &&
                        <div className="dashboard_courses">
                            <div className="dashboard_courses_header">
                                <div>
                                    <h2>Your Courses</h2>
                                </div>
                                <div>
                                    {(this.state.user.profession === 'student')
                                        ? <Button className="Button" type="submit" text="Explore New Courses" onClick = {this.reditectToCoursesPage}/>
                                        : <Button className="Button" type="submit" text="Create A New Course" onClick = {this.CreateCoursePopUp}/>
                                    }
                                </div>
                            </div>
                            <div className="dashboard_courses_body">
                                {
                                    this.state.courses_info.map((course, i) =>{
                                        return <ShowBox name = {course.name} profilePic = {course.coursePic} user = {this.state.user}  course = {course} changeCourseInfo={this.changeCourseInfo} />
                                    })
                                }
                            </div>
                        </div>
                    }
                    {(this.state.CreateCoursePopUp && this.state.CourseOrTeacherBoxIsNotOpened) && <CreateCoursePopUp onClick = {this.createCourse} cancelClick = {this.CreateCoursePopUp} onChange = {this.onChange} />}
                    
                    {/* component for students only to show their subscribed teachers list */}
                    {(this.state.user.profession === 'student' && this.state.CourseOrTeacherBoxIsNotOpened) && 
                        <div className="dashboard_teachers">
                            <div className="dashboard_teachers_header">
                                <div>
                                    <h2>Your Teachers</h2>
                                </div>
                                <div>
                                    <Button className="Button" type="submit" text="All Teachers" onClick = {this.reditectToTeachersPage}/>
                                </div>
                            </div>
                            <div className="dashboard_teachers_body"></div>
                        </div>
                    }
                    {
                        (this.state.CourseOrTeacherBoxIsNotOpened === false) &&
                        <CourseBox course = {this.state.course}/>
                    }
                    
                </div>
            </div>
        )
    }
    
}

export default dashBoard
