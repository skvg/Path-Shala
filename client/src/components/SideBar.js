import React from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Header from './Header.js'
import Button from './Button.js'

class sideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('savedToken'),
            logout: false,
            user: this.props.user,
        }
        this.logout = this.logout.bind(this)
        this.redirectToDashboard = this.redirectToDashboard.bind(this)
    }
    logout() {
        const authToken = ('Bearer ').concat(this.state.token)
        axios.post(`${process.env.REACT_APP_HOST}/user/logout`, this.state.user,{headers: {"Authorization" : authToken}})
        .then((res) => {
            localStorage.removeItem('savedToken')
            this.setState({logout: true})
        })
        .catch((e) => console.log(e))
    }
    redirectToDashboard() {
        this.props.changeState(true)
    }

    render() {
        if(this.state.logout){
            return(
                <Redirect to = "/" />
            )
        }
        return (
            <div className= 'sideBar'>
                <Header />
                <button onClick = {this.redirectToDashboard} className = "profile_pic_button">
                    <img src = {this.props.user.profilePic} width="100" height="100" alt ='' />
                </button>
                <h1>{this.props.user.name}</h1>
                <h5>{this.props.user.email}</h5>
                <Button className="Button" type = "submit" text = "Log Out" onClick = {this.logout}/>
            </div>
        )
    }
}

export default sideBar
