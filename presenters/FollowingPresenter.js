import React from 'react';
import { StatusView } from '../views/StatusView'
import { getUserFeed } from '../services/StatusService'
import { getUser } from '../services/UserService'
import { user } from '../model/user'
import { FollowingView } from '../views/FollowingView'

export class FollowingPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: new user('profile.jpg', 'Janessa', 'Jones', '@janLove', 'password'),
        }
    }

    renderFollower() {
        return <FollowingView 
                    // profileImage=
                    name={"Janessa" + " " + "Juntong"}
                    handle={"@janlove"}
                    onHandleClick={(view)=>this.props.updateMaster('user-view')}
                />;
    }

    render() {    
        return (
            <div className="selectionContainer">
                <div className="followingDisplay">
                    <h2>Following</h2>
                    {this.renderFollower()}
                    {this.renderFollower()}
                    {this.renderFollower()}
                </div>
                <div className="followingDisplay">
                    <h2>Followers</h2>
                    {this.renderFollower()}
                    {this.renderFollower()}
                    {this.renderFollower()}
                </div>
            </div>
        )
    }
} 