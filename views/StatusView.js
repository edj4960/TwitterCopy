import React from 'react';

export class StatusView extends React.Component{
    render() {
        return(
            <div id={this.props.id} className="statusBox">
                <img className="profile-small" src={ require('../profile.jpg') } />
                <div class="status-content">
                    <p onClick={this.props.onStatusClick}>
                        {this.props.name} 
                        <a href="#" onClick={this.props.onHandleClick}>{this.props.handle}</a> <br />
                    {this.props.date}<br/></p>
                    <hr></hr>
                    <p>{this.props.message}</p>
                    {this.props.media}
                </div>
            </div>
        );
    }
}