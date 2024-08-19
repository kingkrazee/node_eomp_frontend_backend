<template>
  <div class="spinner" v-if="loading">
    Loading...
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
}
</script>

<style scoped>
.spinner {
  text-align: center;
  font-size: 20px;
  margin: 50px 0;
}
</style>
