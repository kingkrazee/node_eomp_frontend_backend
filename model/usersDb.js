import { pool } from "../config/config.js"
const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}
const getUserDb = async (id)=>{
    let [data] = await pool.query('SELECT * FROM users WHERE userID = ?',[id])
    return data
}
const getUserEmailDb = async (email)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd = ?',[email])
    return data
}
 const insertUserDb = async(firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)=>{
    await pool.query(`
        INSERT INTO users
        (firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)
        VALUES (?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile])
 }
 const deleteUserDb = async(userID) =>{
    await pool.query('DELETE FROM users WHERE userID = ?', [userID])
 }
 const updateUserDb = async (firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile, userID)=>{
    await pool.query('UPDATE users SET firstName = ?,lastName = ?,userAge = ?,gender = ?,userRole = ?,emailAdd = ?,userPass = ?,userProfile = ? WHERE userID = ?',[firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile, userID])
 }


export {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDb, getUserEmailDb}