import React from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'

import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Buttton from '../components/Button'


class login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: null
        }
        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    updateEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    updatePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const userObject = {
            email: this.state.email,
            password: this.state.password
        };
        // calling for the api endpoint here
        Axios.post(`${process.env.REACT_APP_HOST}/login`, userObject).then( (res)=>{
            const token = res.data.token
            localStorage.setItem('savedToken', token)
            this.setState({redirect: '/dashboard'})
        }).catch((err)=>{
            console.log(err)
        })
        
        this.setState({
            email: '',
            password: '',
            redirect: null
        })

    }
    render(){
        if(this.state.redirect){
            return (
                <Redirect to = {this.state.redirect} />
            )
        }
        return (
            <div>
                <Header />
                <form className="box" onSubmit = {this.onSubmit}>
                    <InputBox name = "E-mail Address" placeholder = "Type your E-mail Address" onChange = {this.updateEmail}/>
                    <InputBox name = "Password" placeholder = "Type your Password" onChange = {this.updatePassword} />
                    <Buttton className="Button" type = "submit" text = "Log In"  />
                </form>
            </div>
        )
    }
}

export default login
