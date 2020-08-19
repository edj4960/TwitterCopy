import React from 'react';

export class UserView extends React.Component{
    render() {
        return(
            <div className="statusBox">
                <img className="profile-small" src={ require('../profile.jpg') } />
                <div class="status-content">
                        <p >{this.props.name} {this.props.handle}<br />
                        <hr></hr></p>
                        <button>Follow</button>
                        {this.props.story}
                        {this.props.feed}
                        {this.props.following}
                </div>
            </div>
        );
    }
}