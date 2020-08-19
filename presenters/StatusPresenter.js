import React from 'react';
import { textChangeHandler } from '../util'
import { createUser } from '../services/SignupService'
import { StatusView } from '../views/StatusView'
import { getUserFeed } from '../services/StatusService'
import { getUser } from '../services/UserService'
import { user } from '../model/user'

var statusNumber = 1

export class StatusPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: new user('profile.jpg', 'Janessa', 'Jones', '@janLove', 'password'),
            statuses:             [{
                "alias": "@edj",
                "message": "Hello! This is my first status.",
                "media": "./DSC_0097.jpg",
                "timeStamp": "9/29/2019"
            },
            {
                "alias": "@janlove",
                "message": "Another amazing day. So thankful right now!",
                "media": null,
                "timeStamp": "9/30/2019"
            },
            {
                "alias": "@janlove",
                "message": "With my best friend @edj #bestday",
                "media": null,
                "timeStamp": "10/10/2019"
            }],
            displayType: this.props.displayType,
            showModal: false,
        }
    }

    renderStatus(status, image) {
        var owner = getUser(status.alias)

        var messageArray = status.message.split(' ')
        for (var i=0; i< messageArray.length; i++) {
            var firstChar = messageArray[i].charAt(0)
            if (firstChar === "@" || firstChar === "#") {
                if(firstChar === "@") {
                    messageArray[i] = <a href='#' onClick={(selection) => this.props.updateMaster("user-view")}>{messageArray[i]}</a>
                } else if(firstChar === "#") {
                    messageArray[i] = <a href='#' onClick={(selection) => this.props.updateMaster("hashtag-view")}>{messageArray[i]}</a>
                }
                
                if (i+1 < messageArray.length) {
                    messageArray.splice(i+1, 0, " ")
                }
            } else {
                messageArray[i] += " "
            }
        }
        var message = (<p>{messageArray}</p>)

        var statusId = this.state.displayType + statusNumber
        statusNumber++
        return <StatusView
                    id={statusId}
                    name={owner.firstName + " " + owner.lastName}
                    handle={" " +status.alias}
                    onHandleClick={(selection) => this.props.updateMaster("user-view")}
                    date={status.timeStamp}
                    message={message}
                    media={image}
                    onStatusClick={(event)=>this.viewSingleStatus(statusId)}
                />;
    }

    viewSingleStatus(statusId) {
        var status = document.getElementById(statusId);
        var modal = document.getElementById("modal-body")
        modal.innerHTML = status.innerHTML
        this.setState({
            showModal: true
        })
    }

    hideSingleStatus (){
        this.setState({
            showModal: false
        })
    }

    render() {    
        return (
            <div className='selectionContainer'>
                <h1>Your Feed :)</h1>
                <hr></hr>
                {this.renderStatus(this.state.statuses[0])}
                {this.renderStatus(this.state.statuses[1])}
                {this.renderStatus(this.state.statuses[2], (<img className="status-image" src={ require('../DSC_0097.JPG') } />))}
                <div id="statusModal" style={{visibility: this.state.showModal ? 'visible' : 'hidden' }} class="modal">
                    <div class="modal-content">
                        <span class="close" onClick={this.hideSingleStatus.bind(this)}>&times;</span>
                        <div id="modal-body" class="modal-body">
                            <p>Some text in the Modal..</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 