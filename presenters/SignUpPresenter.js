import React from 'react';
import { SignUpView } from '../views/SignUpView'
import { textChangeHandler } from '../util'
import { createUser } from '../services/SignupService'

export class SignUpPresenter extends React.Component {
    serverProxy = null

    constructor(props) {
        super(props);
        this.state = {
            profileImage: null,
            firstName: "",
            lastName: "",
            handle: "",
            password: "",
            message: "",
        }
        this.serverProxy = props.serverProxy
    }

    onLoginClick() { this.props.updateMaster("login-view") }
    textChangeHandler = textChangeHandler

    fileSelectedHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                profileImage: URL.createObjectURL(event.target.files[0]),
            });
        }
    }

    onSignUpClick() {
        this.serverProxy.signUp(null)
        // this.props.updateMaster('feed-view')
        // let message = ""
        // if (this.state.profileImage === null ||
        //     this.state.firstName === "" ||
        //     this.state.lastName === "" ||
        //     this.state.handle === "" ||
        //     this.state.password === "") {
        //     message = "Please ensure no areas are left blank"
        // }

        // if (message === "") {
        //     let user = createUser(this.state.profileImage,
        //         this.state.firstName,
        //         this.state.lastName,
        //         this.state.handle,
        //         this.state.password);
        //     if (user === null) {
        //         message = "Please select a different handle"
        //     } else {
        //         message = "Sign Up Successful"
        //         this.props.setUser(this.state.user)
        //     }
        // }

        // this.setState({
        //     message: message
        // })
    }


    render() {
        return (
            <div>
                <SignUpView
                    onFileSelected={this.fileSelectedHandler.bind(this)}
                    profileImage={this.state.profileImage}
                    onFirstNameChange={(e, fieldName) => this.textChangeHandler(e, "firstName")}
                    onLastNameChange={(e, fieldName) => this.textChangeHandler(e, "lastName")}
                    onHandleChange={(e, fieldName) => this.textChangeHandler(e, "handle")}
                    onPasswordChange={(e, fieldName) => this.textChangeHandler(e, "password")} 
                    onSignUpClick={() => this.onSignUpClick.bind(this)}
                    onLoginClick={() => this.onLoginClick.bind(this)}
                    message={this.state.message}
                    />
            </div>
        )
    }
} 