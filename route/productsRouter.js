import express from 'express'
import { getProducts, getProduct, insertProduct, deleteProduct, updateProduct } from '../controller/productsController.js'

const router = express.Router()
router.
    route('/')
        .get(getProducts)
        .post(insertProduct)

router.
    route('/:id')
        .get(getProduct)
        .delete(deleteProduct)
        .patch(updateProduct)
export default router