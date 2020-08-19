import React from 'react';

export class FollowingView extends React.Component{
    render() {
        return(
            <div className="followingBox">
                <img className="profile-small" src={ require('../profile.jpg') } />
                <div class="status-content">
                    <p >{this.props.name} <br />
                    <a href="#" onClick={this.props.onHandleClick}>{this.props.handle}</a></p>
                </div>
            </div>
        );
    }
}