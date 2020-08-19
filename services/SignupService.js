import { contains } from '../util'
import { user } from '../model/user'
import {usersData} from '../data'

export function createUser(profileImage, firstName, lastName, alias, password) {
    if (contains(usersData, ["alias"], [alias])) {
        return null
    } else {
        return new user(profileImage, firstName, lastName, alias, password)
    }
}