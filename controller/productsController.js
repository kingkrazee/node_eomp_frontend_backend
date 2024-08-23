import { getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb } from '../model/productsDb.js'
const getProducts = async(req,res)=>{
    res.json(await getProductsDb())
}
const getProduct = async(req,res)=>{
    res.json(await getProductDb(req.params.id))
}
const insertProduct = async(req,res)=>{
    let {prodName,quantity,amount,category,prodUrl} =req.body
    await insertProductDb(prodName,quantity,amount,category,prodUrl)
    res.status(200).send('Products added successfully')
}
const deleteProduct = async(req,res)=>{
    await deleteProductDb(req.params.id)
    res.status(200).send('Product has been deleted')
}
const updateProduct = async(req,res)=>{
    let {prodName,quantity,amount,category,prodUrl} =req.body
    let [products] = await getProductDb(+req.params.id)
    prodName ? prodName: { prodName } = products
    quantity ? quantity: { quantity } = products
    amount ? amount: { amount } = products
    category ? category: { category } = products
    prodUrl ? prodUrl: { prodUrl } = products
    await updateProductDb(prodName,quantity,amount,category,prodUrl, +req.params.id)
    res.status(200).send('Product updated successfully')
}
export {getProducts, getProduct, insertProduct, deleteProduct, updateProduct}