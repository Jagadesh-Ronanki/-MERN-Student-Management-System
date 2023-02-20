import express from 'express'
import {setLogin} from '../controllers/login.js'

const router = express.Router();

router.post('/', setLogin)

export default router