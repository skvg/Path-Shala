import React from 'react'
import axios from 'axios'
import SideBar from '../components/SideBar.js'
import ShowBox from '../components/ShowBox.js'
import { Redirect } from 'react-router'

class teachers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('savedToken'),
            teachers: [],
            user: {},
            redirect_to_dashboard: false,
        }
        this.getAllTeachers = this.getAllTeachers.bind(this)
        this.getUser = this.getUser.bind(this)
        this.changeState = this.changeState.bind(this)
    }

    getAllTeachers() {
        const authToken = ('Bearer ').concat(this.state.token)
        axios.get(`${process.env.REACT_APP_HOST}/teachers`, {headers: {"Authorization" : authToken}} )
        .then((res) => {
            const teachers = res.data
            this.setState({teachers: teachers})
        })
        .catch((e) => {
            console.log(e)
        })
    }
    getUser (){
        const authToken = ('Bearer ').concat(this.state.token)
        axios.get(`${process.env.REACT_APP_HOST}/user`, {headers: {"Authorization" : authToken}})
        .then((res) => {
            this.setState({user: res.data})
        })
        .catch((e) => {
            this.setState({logout: true})
            console.log(e)
        })
    }
    changeState(value) {
        this.setState({redirect_to_dashboard: value})
    }
    componentDidMount(){
        this.getUser()
        this.getAllTeachers()
    }

    render() {
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
                    <h1>All teachers are now listed here</h1>
                    <div >
                        {
                            this.state.teachers.map((teacher, i) =>{
                                return <ShowBox user = {teacher} name = {teacher.name} profilePic = {teacher.profilePic} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default teachers
