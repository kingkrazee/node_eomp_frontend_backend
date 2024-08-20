<template>
  <div class="container-fluid home">
    <div class="col">
      <h1 class="homeHeader">PLAY HUB</h1>
      <p class="slogan">Gear up, Game on.</p>
      <button class="btn" @click="$router.push('/products')">Shop Now<img src="https://nasheetajacobs1999.github.io/Node.js-Images/images/RightArrowHomeBtn.jpg" alt="Arrow Right" class="arrow-icon"></button>
    </div>
    <!-- rest of your code -->
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.home{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://nasheetajacobs1999.github.io/Node.js-Images/images/BG-HomeImage.jpg');
  background-size: cover;
  background-position: center;
  padding: 4rem;
  margin-top: 3rem;
}

.slogan {
  font-family: 'TT Octosquares', sans-serif;
  font-size: 5rem;
  color: whitesmoke;
}

.homeHeader {
  font-family: 'Cosmic Sans', cursive;
  font-size: 7rem;
  font-weight: bolder;
  color: whitesmoke;
}

.col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.btn {
  background-color: #3e41d3;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 5rem;
}

.btn:hover {
  background-color: #21508d;
  color: #fff;
}
</style>