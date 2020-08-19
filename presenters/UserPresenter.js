import React from 'react';
import { StatusView } from '../views/StatusView'
import { getUserFeed } from '../services/StatusService'
import { getUser } from '../services/UserService'
import { user } from '../model/user'
import { UserView } from '../views/UserView'
import { StatusPresenter } from './StatusPresenter'
import { FollowingPresenter } from './FollowingPresenter'

export class UserPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: new user('profile.jpg', 'Janessa', 'Jones', '@janLove', 'password'),
            statuses: getUserFeed(user),
            displayType: this.props.displayType
        }
    }
    
    render() {    
        return (
            <div className='userSelectionContainer'>
                <UserView
                    name="Janessa Jones"
                    handle="@janlove"
                    story={<StatusPresenter
                        updateMaster={(caseMessage)=>this.props.updateMaster(caseMessage)}
                        user={this.state.user}
                        displayType={"story"}/>}
                    feed={<StatusPresenter
                        updateMaster={(caseMessage)=>this.props.updateMaster(caseMessage)}
                        user={this.state.user}
                        displayType={"feed"}/>}
                    following={<FollowingPresenter
                        updateMaster={(caseMessage)=>this.props.updateMaster(caseMessage)}
                        user={this.state.user}/>}
                />
            </div>
        )
    }
} 