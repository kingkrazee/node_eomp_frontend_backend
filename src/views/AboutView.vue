<template>
  <div class="container-fluid" id="about">
    <div class="about-info container">
      <img src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH-Slogan.png" alt="web-logo">
      <h1 class="name">Welcome to <span class="brand">Play Hub</span></h1>
      <p id="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
      </p>
      <p>
        Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
    </div>
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
  background-image: linear-gradient(to bottom left, #58a4eb,#20152e, #000000) ;
  background-position: center;
  background-repeat: no-repeat;
}

.about-info {
  position: relative;
  bottom: 100px;
}

img[alt="web-logo"] {
  height: 120px;
  border-radius: 1rem;
  margin-top: 2rem;
}

.name {
  font-family: 'TT Octosquares', sans-serif;
  font-size: 60px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 1rem;
}

.brand {
  color: #0011ff;
}

p {
  color: white;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;
}
</style>