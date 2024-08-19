<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  color: white;
}
ul {
  display: flex;
  list-style: none;
}
li {
  margin: 0 10px;
}
</style>
