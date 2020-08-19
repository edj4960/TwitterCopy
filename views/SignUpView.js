import React from 'react';

export class SignUpView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className="loginBox">
                <div className="login">
                    SIGN UP<br/>
                    <img class="profile" src={this.props.profileImage} alt="profile"></img><br/>
                    <input type="file" style={{display: "none"}} onChange={this.props.onFileSelected}
                        ref={fileInput => this.fileInput = fileInput} />
                    <button onClick={() => this.fileInput.click()}>Pick Profile Image</button>
                    <input type="text" onChange={this.props.onFirstNameChange} placeholder="John"></input><br/>
                    <input type="text" onChange={this.props.onLastNameChange} placeholder="Doe"></input><br/>
                    <input type="text" onChange={this.props.onHandleChange} placeholder="@Handle"></input><br/>
                    <input type="text" onChange={this.props.onPasswordChange} placeholder="Password"></input>
                        <div>
                            <button id="btn_login" onClick={this.props.onSignUpClick()}>Sign Up!</button><br/>
                            Already have an account? <button onClick={this.props.onLoginClick()}>Login!</button>
                            <p>{this.props.message}</p>
                        </div>
                </div>
            </div>
        );
    }
}