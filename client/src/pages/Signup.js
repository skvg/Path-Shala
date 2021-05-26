import React from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router'

import Header from '../components/Header'
import InputBox from '../components/InputBox'
import SelecItem from '../components/SelectItem'
import Button from '../components/Button'

class signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            profession: 'student',
            email: '',
            password: '',
            redirect: null
        };
        this.changeName = this.changeName.bind(this);
        this.changeProfession = this.changeProfession.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeName(e){
        this.setState({
            name: e.target.value
        })
    }
    changeProfession(e){
        this.setState({
            profession: e.target.value
        })
    }
    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    changePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const userObject = {
            name: this.state.name,
            profession: this.state.profession,
            email: this.state.email,
            password: this.state.password
        }
        Axios.post(`${process.env.REACT_APP_HOST}/signup`, userObject)
        .then((res) =>{
            const token = res.data.token
            localStorage.setItem('savedToken', token)
            this.setState({redirect: '/dashboard'})
        })
        .catch(err => console.log(err))

        this.setState({
            name: '',
            profession: 'student',
            email: '',
            password: ''
        })
    }
    render(){
        if(this.state.redirect){
            return (
                <Redirect to = {this.state.redirect} />
            )
        }
        return (
            <div className = "Signup">
                <Header />
                <form className = "SignupBox" onSubmit= {this.onSubmit}>
                    <InputBox name = "Name" placeholder = "Type your Name" onChange = {this.changeName}/>
                    <SelecItem name = "Profession" size = "2" optionName = {["student", "teacher"]} onChange = {this.changeProfession} />
                    <InputBox name = "E-mail Address" placeholder = "Type your E-mail address" onChange = {this.changeEmail}/>
                    <InputBox name = "Set Password" placeholder = "Type your password" onChange = {this.changePassword}/>
                    <Button className="Button" type = "submit" text = "Create account"/>
                </form>
            </div>
        )
    }
}

export default signup
