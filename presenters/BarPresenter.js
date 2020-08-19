import React from 'react';
import { BarView } from '../views/BarView';
import { NewStatusView } from '../views/NewStatusView';

export class BarPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            newStatusDisplay: {"display":"none"}
        }
    }

    onSelectionChange(selection) {
        this.props.updateMaster(selection);
    }

    addStatus() {
        this.setState({
            newStatusDisplay: {"display": "block"}
        })
    }

    newStatusSubmit() {
        this.setState({
            newStatusDisplay: {"display": "none"}
        })
    }

    render() {
        return (
            <div>
                <BarView
                    onFeedClick={(selection) => this.onSelectionChange("feed-view")}
                    onStoryClick={(selection) => this.onSelectionChange("story-view")}
                    onFollowingClick={(selection) => this.onSelectionChange("following-view")}
                    onLogoutClick={(selection) => this.onSelectionChange("login-view")}
                    onAddStatusClick={this.addStatus.bind(this)}
                />
                <NewStatusView
                    onSendClick={this.newStatusSubmit.bind(this)}
                    display={this.state.newStatusDisplay}
                />
            </div>
        )
    }
} 