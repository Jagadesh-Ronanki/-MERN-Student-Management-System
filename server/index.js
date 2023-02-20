import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/student.js'
import loginRoutes from './routes/login.js'
import validateRoutes from './routes/validate.js'
import updateRoutes from './routes/update.js'

const app = express()
app.use(cors())

app.use(bodyParser.json({limit: "20mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}))

app.use('/students', userRoutes)
app.use('/login', loginRoutes)
app.use('/validate', validateRoutes)
app.use('/update', updateRoutes)


const CONNECTION_URL = 'mongodb://localhost:27017'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => 
    console.log(`Connection is established and running on port ${PORT}`)
))
.catch((err) => console.log(err.message))
