import {compare} from "bcrypt";
import {getUserEmailDb} from "../model/usersDb.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

const checkUser = async(req,res,next)=>{
    const {emailAdd,userPass} = req.body;
    let hashedPassword = (await getUserEmailDb(emailAdd)).userPass
    console.log(hashedPassword);
    
    if(!hashedPassword){
        return res.status(401).json({message:"User email or password is incorrect"})
    }
    let result = await compare(userPass,hashedPassword)
        if(result==true){
            let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
            req.body.token = token
            console.log(token);
            next()
        }else{
            res.send('Password incorrect')
        }
}


export {checkUser}