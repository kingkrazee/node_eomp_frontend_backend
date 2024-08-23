<template>
    <div class="container-fluid" id="admin">
        <div class="container tab-div">
            <h2>Products</h2>
            <button class="add" type="button" data-bs-toggle="modal" data-bs-target="#addproductModal">
                <i class="fa-solid fa-square-plus"></i>
            </button>
            <table class="table">
                <thead>
                    <tr id="prod-row">
                        <th scope="col">ProdImg</th>
                        <th scope="col">ProdID</th>
                        <th scope="col">ProdName</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID" id="prod-row">
                        <td><img :src="product.prodUrl" alt="product-img" id="tab-img"></td>
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.category }}</td>
                        <td class="btns">
                            <button @click="editBtn(product.prodID)" class="btn-edit" data-bs-toggle="modal" data-bs-target="#productModal">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button @click="confirmDelete(product.prodID)" class="btn-del">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>

        <!-- Add Product Modal -->
        <div class="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="addproductModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addproductModalTitle">Add a Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodName" type="text" placeholder="Name"><br>
                        <input v-model="quantity" type="text" placeholder="Quantity"><br>
                        <input v-model="amount" type="text" placeholder="Amount"><br>
                        <input v-model="category" type="text" placeholder="Category"><br>
                        <input v-model="prodUrl" type="text" placeholder="Img Url"><br>
                        <input v-model="prodBio" type="text" placeholder="Bio img url"><br>
                        <input v-model="prodDes" type="text" placeholder="Description"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addProduct">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Edit Product Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productModalTitle">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="prodPayload.prodName" type="text" placeholder="Product name"><br>
                        <input v-model="prodPayload.quantity" type="text" placeholder="Quantity"><br>
                        <input v-model="prodPayload.amount" type="text" placeholder="Amount"><br>
                        <input v-model="prodPayload.category" type="text" placeholder="Category"><br>
                        <input v-model="prodPayload.prodUrl" type="text" placeholder="Image Url"><br>
                        <input v-model="prodPayload.prodBio" type="text" placeholder="Bio"><br>
                        <input v-model="prodPayload.prodDes" type="text" placeholder="Description"><br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="editProduct">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components: {
        Spinner
    },
    data() {
        return {
            prodPayload: {
                prodID: null,
                prodName: "",
                quantity: "",
                amount: "",
                category: "",
                prodUrl: "",
                prodBio: "",
                prodDes: "",
            },
            prodName: "",
            quantity: "",
            amount: "",
            category: "",
            prodUrl: "",
            prodBio: "",
            prodDes: "",
            productToDelete: null // Added to store the ID of the product to delete
        }
    },
    methods: {
        addProduct() {
            const data = {
                prodName: this.prodName,
                quantity: this.quantity,
                amount: this.amount,
                category: this.category,
                prodUrl: this.prodUrl,
                prodBio: this.prodBio,
                prodDes: this.prodDes
            };
            this.$store.dispatch('addAProduct', data);
        },
        editProduct() {
            this.$store.dispatch('updateProduct', this.prodPayload);
        },
        editBtn(id) {
            const item = this.products.find(item => item.prodID == id);
            if (item) {
                this.prodPayload = { ...item };
            }
        },
        confirmDelete(id) {
            // this.productToDelete = id; // Set the product ID to delete
            // const confirmation = confirm("Are you sure you want to delete this product?");
            // if (confirmation) {
            //     this.deleteProductFUNC(id);
            // }
            console.log(id)
            this.$store.dispatch('deleteProduct', id)
        },
        deleteProductFUNC(id) {
            this.$store.dispatch('deleteProduct', id)
                .then(() => {
                    this.productToDelete = null; // Clear the product ID
                });
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    }
}
</script>



<style>
#admin {
    background: linear-gradient(to bottom left, #280677,#271341, #000000);
    padding: 30px;
}

#tab-img {
    height: 20px;
}

tr td {
    border: 1px solid black;
}

th {
    border: 1px solid black;
    color: #42b983;
}

.tab-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

h1 {
    color: #841818;
    font-family: Anta, sans-serif;
    font-size: 5rem;
    text-decoration: underline;
}

h2 {
    color: #42b983;
}

.btn-edit {
    border-radius: 10px;
    border: none;
    width: 70px;
    margin: 5px;
    background: #42b983;
}

.btn-del {
    border-radius: 10px;
    border: none;
    width: 70px;
    margin: 5px;
    background: #841818;
}

.add {
    width: 30px;
    background: transparent;
    border: none;
    color: #42b983;
    transition: 0.8s;
}

.add:hover {
    box-shadow: inset 0px 0px 4px 2px #42b983;
}
@media only screen and (max-width: 768px) {
  .table {
    font-size: 0.7em;
  }
  th, td {
    padding: 4px;
  }
  .btn-edit, .btn-del {
    width: 50px;
    font-size: 0.8em;
  }
}

@media only screen and (max-width: 480px) {
  .table {
    font-size: 0.5em;
  }
  th, td {
    padding: 1px;
  }
  .btn-edit, .btn-del {
    width: 30px;
    font-size: 0.6em;
  }
}
</style>


    
