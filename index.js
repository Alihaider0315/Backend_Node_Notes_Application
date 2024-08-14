import express from  'express'
import dotenv from 'dotenv'
import AuthRoutes from './routes/Auth.js';
import DbCon from './utlis/db.js';
import NotesRoute from './routes/Notes.js';
import cookieParser from 'cookie-parser';
dotenv.config()

const PORT = process.env.PORT
const app = express();

// Database Connection

DbCon()
app.use(express.json());
app.use(cookieParser());
app.use('/auth',AuthRoutes)
app.use('/note',NotesRoute)
app.get('/',(req,res)=>{
    res.send('Checking Main Link')
})

app.listen(PORT,()=>{
    console.log(`Server is running On Port ${PORT}`)
})