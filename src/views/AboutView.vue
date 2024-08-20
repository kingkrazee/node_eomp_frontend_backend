<template>
  <div class="container-fluid" id="about">
    <div class="about-info container">
      <img src="https://iili.io/JGNgKPf.png" alt="web-logo">
      <h2>Welcome To</h2>
      <h1 class="name">Play Hub</h1>
      <span id="text">
       
      </span>
    </div>
    <!-- <img src="https://iili.io/JGw1YUQ.jpg" alt="about-bg"> -->
  </div>
</template>

<style scoped>
#about {
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url("https://nasheetajacobs1999.github.io/Node.js-Images/images/PH.png"); */
  background-image: linear-gradient(to bottom left, #00CAFF, #000000) ;
  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
}

.about-info {
  position: relative;
  bottom: 100px;
}

img[alt="web-logo"] {
  height: 200px;
}
h2{
  color: rgb(7, 7, 7);
}
.name {
  font-family: Anta, sans-serif;
  font-size: 60px;
  font-weight: 900;
  color: #080808;
}

p {
  color: white;
  backdrop-filter: blur(10px);
}
</style>