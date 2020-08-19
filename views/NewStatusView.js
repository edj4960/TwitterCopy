import React from 'react';

export class NewStatusView extends React.Component{
    render() {
        return(
            <div className="newStatusBox" style={this.props.display}>
                <h3>What's on your mind?</h3>
                <textarea className="newStatus-text"></textarea>
                <p>Add an Images or Videos</p>
                <input type="file"/>
                <button onClick={this.props.onSendClick}>Send</button>
                <button onClick={this.props.onSendClick}>Cancel</button>
            </div>
        );
    }
}