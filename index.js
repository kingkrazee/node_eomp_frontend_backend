import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import userRouter from './route/userRouter.js'
import productsRouter from './route/productsRouter.js'
config()
let PORT = process.env.PORT || 5017
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials:true
}))

app.use(express.static('public'))
app.use('/users',userRouter)
app.use('/products', productsRouter)
app.listen(PORT,()=>{
    console.log('http:localhost:'+PORT)
})
