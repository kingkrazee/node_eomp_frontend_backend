import {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'
const getUsers = async(req,res)=>{
    res.json(await getUsersDb())
}
const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.id))
}
const insertUser = async(req,res)=>{
    let {cookie} = req.headers
    console.log(cookie);
    let {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} =req.body
    hash(userPass, 10, async (err,hashedP)=>{
        if(err) throw err
        console.log(hashedP);
        await insertUserDb(firstName,lastName,userAge,gender,userRole,emailAdd,hashedP,userProfile)
        res.status(200).send('User was inserted successfully')
    })
}
const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.status(200).send('User has been deleted')
}
const updateUser = async(req,res)=>{
    let {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
    let [user] = await getUserDb(+req.params.id)
    firstName ? firstName: { firstName } = user
    lastName ? lastName: { lastName } = user
    userAge ? userAge: { userAge } = user
    gender ? gender: { gender } = user
    userRole ? userRole: { userRole } = user
    emailAdd ? emailAdd: {emailAdd} = user
    userPass ? userPass: {userPass} = user
    userProfile ? userProfile: {userProfile} = user

    await updateUserDb(firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile, +req.params.id)
    res.status(200).send('User Updated user successfully')
}
const loginUser = async(req,res)=>{
    res.status(200).send({message:"You have logged in successfully"})
}
export {getUsers, getUser,insertUser, deleteUser, updateUser, loginUser}