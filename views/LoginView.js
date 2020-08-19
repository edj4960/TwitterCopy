import React from 'react';

export class LoginView extends React.Component{
    render() {
        return(
            <div className="loginBox">
                <div className="login">
                    LOGIN<br/>
                    <input type="text" id="in_handle" onChange={this.props.onHandleChange} placeholder="@Handle" value="@alias"></input><br/>
                    <input type="text" id="in_password" onChange={this.props.onPasswordChange} placeholder="Password" value="password"></input>
                        <div>
                            <button id="btn_login" onClick={this.props.onLoginClick()}>Login</button><br/>
                            Don't have an account? <button onClick={this.props.onSignUpClick()} >Sign Up today!</button>
                            <p>{this.props.message}</p>
                        </div>
                </div>
            </div>
        );
    }
}