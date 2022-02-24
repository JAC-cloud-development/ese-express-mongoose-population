import jwt from 'jsonwebtoken'
import _ from 'lodash'
import { db } from '../db/fakedb.js'

export default function validateJWT(request, response, next) {
    try {
        var decoded = jwt.verify(request.headers.authorization.split(" ")[1], 'secret');
        const user = _.find(db.users.list(), (u) => u.id.toString() === decoded.user.id.toString())
        console.log({ user })
        if (user) {
            request.user = user;
            next();
        } else {
            response.sendStatus(401)
        }
    } catch (e) {
        console.error(e)
        response.sendStatus(401)
    }
}