import express from 'express'
import student from '../models/student.js'
import {setLogin} from '../controllers/login.js'

const router = express.Router();

router.post('/', setLogin)

export default router