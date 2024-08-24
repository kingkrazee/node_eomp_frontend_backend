<template>
  <div class="container" id="product">
      <div class="row">
          <h2 class="display-2">Products</h2>
      </div>

      <!-- Search and Filter -->
      <div class="row mb-4">
          <div class="col-md-6 mb-2 mb-md-0">
              <input
                  v-model="searchQuery"
                  type="text"
                  class="form-control"
                  placeholder="Search products"
              />
          </div>
          <div class="col-md-6">
              <select v-model="selectedCategory" class="form-select">
                  <option value="">All Categories</option>
                  <option v-for="category in categories" :key="category" :value="category">
                      {{ category }}
                  </option>
              </select>
          </div>
      </div>

      <!-- Sort Options -->
      <div class="row mb-4">
          <div class="col">
              <select v-model="sortOption" class="form-select">
                  <option value="default">Sort by</option>
                  <option value="name">Name</option>
                  <option value="amount">Price</option>
              </select>
          </div>
      </div>

      <!-- Products Display -->
      <div class="row gap-2 justify-content-center my-2" v-if="filteredAndSortedProducts.length">
          <Card v-for="product in filteredAndSortedProducts" :key="product.prodID">
              <template #cardHeader>
                  <img :src="product.prodUrl" loading="lazy" class="img-fluid" style="height: 200px;" :alt="product.prodName">
              </template>
              <template #cardBody>
                  <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                  <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                  <div class="button-wrapper d-md-flex d-block justify-content-between">
                      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                          <button class="btn btn-success">View</button>
                      </router-link>
                      <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
                  </div>
              </template>
          </Card>
      </div>
      <div v-else>
          <Spinner />
      </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'

const store = useStore()
const products = computed(() => store.state.products)
const searchQuery = ref('')
const selectedCategory = ref('')
const sortOption = ref('default')
const categories = ref([])

// Fetch products and categories
onMounted(() => {
  store.dispatch('fetchProducts').then(() => {
      const uniqueCategories = new Set(products.value.map(p => p.category))
      categories.value = Array.from(uniqueCategories)
  })
})

// Filtered and sorted products
const filteredAndSortedProducts = computed(() => {
  let filteredProducts = products.value

  // Apply search filter
  if (searchQuery.value) {
      filteredProducts = filteredProducts.filter(product =>
          product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
  }

  // Category filter
  if (selectedCategory.value) {
      filteredProducts = filteredProducts.filter(product =>
          product.category === selectedCategory.value
      )
  }

  // Sorting
  if (sortOption.value === 'name') {
      filteredProducts = filteredProducts.sort((a, b) => a.prodName.localeCompare(b.prodName))
  } else if (sortOption.value === 'amount') {
      filteredProducts = filteredProducts.sort((a, b) => a.amount - b.amount)
  }

  return filteredProducts
})

function addToCart(product) {
  store.dispatch('addToCart', product)
}
</script>
<style scoped>
/* Existing styles */

#product {
    background: linear-gradient(to bottom left, #280677, #271341, #000000);
}

.display-2 {
    font-family: "Jersey 10", sans-serif;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: whitesmoke;
}

.gap-2 {
    gap: 20px;
}

.my-2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.button-wrapper {
    margin-top: 20px;
}

.btn {
    margin: 10px;
}
.mg-fluid {
    z-index: -6;
}

</style>
<!-- =======

.input-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.form-control-sm {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  height: calc(1.5em + 0.5rem + 2px);
}

.form-select-sm {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  height: calc(1.5em + 0.5rem + 2px);
}

.me-2 {
  margin-right: 0.5rem;
}
</style> -->

