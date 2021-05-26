import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import pic from '../others/educationalQuoteImage.png';

const homePage = () => {
    return (
        <div>
            <Header />
            <div className = "LoginSignupBox">
                <div className="EducationalQuote">
                    <img src={pic} alt="BigCo Inc. logo"/>
                </div>
                <Link to = "/login" >
                    <Button className="Button" type="button" text="Log In" />
                </Link>
                <Link to = "/signup" >
                    <Button className="Button" type="button" text="Sign Up" />
                </Link>
            </div>
        </div>
    )
}

export default homePage
