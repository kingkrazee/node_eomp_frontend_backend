import express from 'express'
import { getUsers, getUser, insertUser, deleteUser, updateUser, loginUser } from '../controller/userController.js'

const router = express.Router()
router.
    route('/')
        .get(getUsers)
        .post(insertUser)

router.post('/login',loginUser)

router.
    route('/:id')
        .get(getUser)
        .delete(deleteUser)
        .patch(updateUser)

export default router