// require the express module
import _ from 'lodash'
import { Router } from 'express';
import { db } from '../../services/db/fakedb.js'
import jwt from 'jsonwebtoken'
import Users from '../users/model.js'
const router = new Router();

router.post("/login", async function (request, response) {
  const decoded = Buffer.from(request.headers.authorization.split(" ")[1], 'base64').toString('binary')
  const username = decoded.split(":")[0]
  const password = decoded.split(":")[1]
  const user = await Users.findOne({ username: username, password: password })
  if (user) {
    const token = jwt.sign({
      user: { id: user.id }
    }, 'secret');
    return response.json({
      token
    })
  }
  return response.sendStatus(401)
});

export default router;