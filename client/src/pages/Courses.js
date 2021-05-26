import React from 'react'
import axios from 'axios'
import SideBar from '../components/SideBar.js'
import ShowBox from '../components/ShowBox.js'
import { Redirect } from 'react-router'

class courses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('savedToken'),
            courses_avail: false,
            courses: [],
            user: {},
            user_avail: false,
            redirect_to_dashboard: false,
        }
        this.getAllcourses = this.getAllcourses.bind(this)
        this.getUser = this.getUser.bind(this)
        this.changeState = this.changeState.bind(this)
    }

    getAllcourses() {
        const authToken = ('Bearer ').concat(this.state.token)
        axios.get(`${process.env.REACT_APP_HOST}/all_courses`, {headers: {"Authorization" : authToken}} )
        .then((res) => {
            const courses = res.data
            this.setState({courses: courses, courses_avail: true})
        })
        .catch((e) => {
            this.setState({courses_avail: true})
            console.log(e)
        })
    }
    getUser (){
        const authToken = ('Bearer ').concat(this.state.token)
        axios.get(`${process.env.REACT_APP_HOST}/user`, {headers: {"Authorization" : authToken}})
        .then((res) => {
            this.setState({user: res.data, user_avail: true})
        })
        .catch((e) => {
            this.setState({logout: true})
            console.log(e)
        })
    }
    changeState(value) {
        this.setState({redirect_to_dashboard: value})
    }

    render() {
        if(!this.state.user_avail){
            this.getUser()
        }
        if(!this.state.courses_avail){
            this.getAllcourses()
        }
        if(this.state.redirect_to_dashboard){
            return(
                <Redirect to ="/dashboard" />
            )
        }
        
        return (
            <div className = 'dashboard'>
                <div className='dashboard_sidebar'>
                    <SideBar user = {this.state.user} changeState = {this.changeState} />
                </div>
                <div className = "dashboard_taskbox">
                    <h1>All courses are now listed here</h1>
                    <div >
                        {
                            this.state.courses.map((course, i) =>{
                                return <ShowBox name = {course.name} profilePic = {course.coursePic} course = {course} user = {this.state.user} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default courses
