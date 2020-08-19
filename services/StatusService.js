import {userData} from '../data'
import {statusData} from '../data'

export function getUserFeed(user) {
    // get who user is following
    let following = ["@janlove"];

    let statusList = [];
    var arr = statusData;
    for (var i=0; i < following.length; i++) {
        var alias = following[i]
        for (var j = 0; j < arr.length; j++) {
            if(arr[j]["alias"] === alias){
                statusList.push(arr[j])
            }
        }
    }
    return statusList
}