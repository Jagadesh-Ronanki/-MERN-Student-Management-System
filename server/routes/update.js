import express from 'express'
import student from '../models/student.js'
import {updateDetails} from '../controllers/update.js'

const router = express.Router();

router.put('/:id', updateDetails)

export default router