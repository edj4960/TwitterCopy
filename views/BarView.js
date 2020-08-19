import React from 'react';

export class BarView extends React.Component{
    render() {
        return(
            <div className="barBox">
                <img id="bar-profile" onClick={() => this.fileInput.click()} src={ require('../profile.jpg') } />

                <input type="file" style={{display: "none"}}
                        ref={fileInput => this.fileInput = fileInput} />

                <input type='text' class='barSearch' placeholder='search'></input>
                <button class='barButton' onClick={this.props.onFeedClick}>Feed</button>
                <button class='barButton' onClick={this.props.onStoryClick}>Story</button>
                <button class='barButton' onClick={this.props.onFollowingClick}>Following/Followers</button>
                <button class='barButton' onClick={this.props.onLogoutClick}>Logout</button>
                <button class='barButton' onClick={this.props.onAddStatusClick}>Add Status</button>
            </div>
        );
    }
}