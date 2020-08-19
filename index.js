import React from 'react';
import ReactDOM from 'react-dom';
import './master.css';
import { LoginPresenter } from './presenters/LoginPresenter';
import { SignUpPresenter } from './presenters/SignUpPresenter';
import { StatusPresenter } from './presenters/StatusPresenter';
import { BarPresenter } from './presenters/BarPresenter';
import { FollowingPresenter } from './presenters/FollowingPresenter';
import { UserPresenter } from './presenters/UserPresenter';
import { user } from './model/user';
import { ServerProxy } from './util/ServerProxy'
// import Safe from "react-safe"
// import 'index.html';

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "login-view",
            user: new user('profile.jpg', 'Janessa', 'Jones', '@janLove', 'password'),
        }
    }

    setUser(user) {
        this.setState({
            user: user
        })
        this.updateMaster('status-view')
    }

    updateMaster(view) {
        this.setState({
            currentView: view
        })
    }

    getCurrentView() {
        switch(this.state.currentView) {
            case "signup-view":
                return <SignUpPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
                setUser={(u)=>this.setUser(u)}
                serverProxy={ServerProxy}/>
            case "login-view":
                return <LoginPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}/>
            case "feed-view":
                return <StatusPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
                user={this.state.user}
                displayType={"feed"}/>
            case "story-view":
                return <StatusPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
                user={this.state.user}
                displayType={"story"}/>
            case "hashtag-view":
                return <StatusPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
                user={this.state.user}
                displayType={"#bestday"}/>
            case "following-view":
                return <FollowingPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
                user={this.state.user}/>
            case "user-view":
                return <UserPresenter
                updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
                user={this.state.user}/>
            default:
                break;
        } 
    }

    getBarView() {
        var cv = this.state.currentView;
        if (cv === "feed-view" || cv === "story-view" || cv === "following-view" || 
            cv === "user-view" || cv === "hashtag-view") {
            return <BarPresenter
            updateMaster={(caseMessage)=>this.updateMaster(caseMessage)}
            user={this.state.user}/>
        }
    }

    componentDidMount() {
        var resources = ["lib/axios/dist/axios.standalone.js",
        "lib/CryptoJS/rollups/hmac-sha256.js",
        "lib/CryptoJS/rollups/sha256.js",
        "lib/CryptoJS/components/hmac.js",
        "lib/CryptoJS/components/enc-base64.js",
        "lib/url-template/url-template.js",
        "lib/apiGatewayCore/sigV4Client.js",
        "lib/apiGatewayCore/apiGatewayClient.js",
        "lib/apiGatewayCore/simpleHttpClient.js",
        "lib/apiGatewayCore/utils.js",
        "https://sdk.amazonaws.com/js/aws-sdk-2.560.0.min.js"]
        for ( var i=0; i< resources.length; i++) {
            const script = document.createElement("script");
            script.src = resources[i]
            script.async = true
            document.body.appendChild(script)
        }
    }

    render() {
        return (
            <html lang="en">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport"
                content="width=device-width, initial-scale=1" />
              <title>React App</title>
                {/* <Safe.script type="text/javascript" src="lib/axios/dist/axios.standalone.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/CryptoJS/rollups/hmac-sha256.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/CryptoJS/rollups/sha256.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/CryptoJS/components/hmac.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/CryptoJS/components/enc-base64.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/url-template/url-template.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/apiGatewayCore/sigV4Client.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/apiGatewayCore/apiGatewayClient.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/apiGatewayCore/simpleHttpClient.js"></Safe.script>
                <Safe.script type="text/javascript" src="lib/apiGatewayCore/utils.js"></Safe.script>
                <Safe.script type="text/javascript" src="apigClient.js"></Safe.script>
                <Safe.script src="https://sdk.amazonaws.com/js/aws-sdk-2.560.0.min.js"></Safe.script>
                <Safe.script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></Safe.script> */}
            </head>
            <body>
                <div id="master">
                    {this.getCurrentView()}
                    {this.getBarView()}
                </div>
            </body>
          </html>
        );
      }
}

// ========================================

ReactDOM.render(<Master />, document.getElementById('root'));