<template>
    <div class="container" id="product">
        <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
    <div class="row justify-content-center mb-2">
      <div class="col-md-4 text-center">
        <div class="input-group">
          <input
            type="search"
            class="form-control form-control-sm me-2"
            placeholder="Search products..."
            v-model="searchQuery"
          />
          <select class="form-select form-select-sm" v-model="sortBy">
            <option value="lowToHigh">Sort By: Low to High</option>
            <option value="highToLow">Sort By: High to Low</option>
          </select>
        </div>
      </div>
    </div>
      <div class="row gap-2 justify-content-center my-2" v-if="filteredProducts">
        <Card v-for="product in filteredProducts" v-bind:key="product.prodID">
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
  const sortBy = ref('lowToHigh')
  
  onMounted(() => {
    store.dispatch('fetchProducts')
  })
  
  function addToCart(product) {
    store.dispatch('addToCart', product)
  }
  
  const filteredProducts = computed(() => {
  if (!products.value) return []
  const filtered = products.value.filter(product => {
    return product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
  if (sortBy.value === 'lowToHigh') {
    return filtered.sort((a, b) => a.amount - b.amount)
  } else {
    return filtered.sort((a, b) => b.amount - a.amount)
  }
})
  </script>

<style scoped>
/* .container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
} */

#product {
    background-color: linear-gradient(to bottom left, #280677,#271341, #000000);
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
.mg-fluid{
    z-index: -6;
}

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
</style>