import { contains } from '../util'
import {usersData} from '../data'

export function loginUser(alias, password) {
    return contains(usersData, ["alias", "password"], [alias, password])
}

export function getUser(alias) {
    return contains(usersData, ["alias"], [alias])
}