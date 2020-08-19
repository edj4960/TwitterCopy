import React from 'react';
import { LoginView } from '../views/LoginView';
import { loginUser } from '../services/UserService'
import { textChangeHandler } from '../util'

export class LoginPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleText: "",
            passwordText: "",
            message: "",
        }
    }

    textChangeHandler = textChangeHandler

    onLoginClick() {
        this.props.updateMaster('feed-view')
        // Check that username and password are correct
        // let message = ""
        // if (loginUser(this.state.handleText, this.state.passwordText)) {
        //     message = "Login Successful"
        // } else {
        //     message = "Login Failed"
        // }

        // this.setState({
        //     message: message
        // })
    }

    onSignUpClick() { this.props.updateMaster("signup-view") }

    render() {
        return (
            <div>
                <LoginView 
                    onHandleChange={(e, fieldName) => this.textChangeHandler(e, "handleText")}
                    onPasswordChange={(e, fieldName) => this.textChangeHandler(e, "passwordText")}
                    onLoginClick={() => this.onLoginClick.bind(this)}
                    onSignUpClick={() => this.onSignUpClick.bind(this)}
                    message={this.state.message}
                    />
            </div>
        )
    }
} 