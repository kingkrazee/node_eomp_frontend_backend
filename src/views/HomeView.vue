<template>
  <div class="container-fluid home">
    <div class="col">
      <img src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH-Slogan.png" alt="Logo" style="width: 150px; height: 150px;">
      <h1>Play Hub</h1>
      <p class="slogan">"Gear up, Game on."</p>
    </div>
    <div class="more">
      <h3>Featured Products</h3>
      <div class="featured">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://via.placeholder.com/800x400" alt="Product 1">
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/800x400" alt="Product 2">
            </div>
            <div class="carousel-item">
              <img src="https://via.placeholder.com/800x400" alt="Product 3">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
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
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url('https://nasheetajacobs1999.github.io/Node.js-Images/images/PH.png'); */
  /* background-size: cover; */
  background-position: center;
  padding: 4rem;
  margin: 0;
  background-image: linear-gradient(to bottom left, #00CAFF, #000000) ;
}

.slogan {
  font-size: 1.5rem;
  color: whitesmoke;
}

.featured{
  display: flex;
  background: rgb(31,37,64);
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.carousel {
  margin: 20px;
}

.carousel-inner img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: #333;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-control-prev-icon:hover, .carousel-control-next-icon:hover {
  background-color: #555;
}
</style>