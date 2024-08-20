import { pool } from "../config/config.js";
const getProductsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}
const getProductDb = async (id)=>{
    let [data] = await pool.query('SELECT * FROM products WHERE prodID = ?',[id])
    return data
}
const insertProductDb = async(prodName,quantity,amount,category,prodUrl)=>{
    await pool.query(`
        INSERT INTO products
        (prodName,quantity,amount,category,prodUrl)
        VALUES (?,?,?,?,?)`,
    [prodName,quantity,amount,category,prodUrl])
}
const deleteProductDb = async(prodID)=>{
    await pool.query('DELETE FROM products WHERE prodID = ?',[prodID])
}
const updateProductDb = async(prodName,quantity,amount,category,prodUrl, prodID)=>{
    await pool.query('UPDATE products SET prodName = ?,quantity = ?,amount = ?,category = ?,prodUrl = ? WHERE prodID = ?',[prodName,quantity,amount,category,prodUrl,prodID])
}
export {getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb}