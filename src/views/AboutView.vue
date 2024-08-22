<template>
  <div class="container-fluid" id="about">
    <div class="about-info-2">
      <div class="about-info container">
      <img src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH-Slogan.png" alt="web-logo">
      <h1 class="name">Welcome to <span class="brand">Play Hub</span></h1>
      <p id="text">
        Play Hub was founded in 2024 by Nasheeta Jacobs and Kayden Hendricks, driven by their shared passion for gaming and a desire to create a community where PlayStation enthusiasts can find everything they need. With a deep understanding of the gaming world, they set out to build a brand that caters to both casual gamers and hardcore players alike. Their vision was simple: to provide top-quality PlayStation products that enhance every gamer's experience.
      </p>
      <p>
        At Play Hub, we offer a wide range of PlayStation products, including the latest consoles, exclusive accessories, and must-have games. Our commitment to quality and customer satisfaction ensures that every product we sell meets the highest standards. Whether you're looking to upgrade your gaming setup or find the perfect gift for a fellow gamer, Play Hub has you covered. We believe that gaming is more than just a hobby—it's a way of life, and we're here to support that journey.
      </p>
      <p>
        Nasheeta and Kayden's dedication to the gaming community is reflected in every aspect of Play Hub. From our curated product selection to our customer service, we strive to create an environment where gamers can thrive. As we continue to grow, our mission remains the same: to be the go-to destination for all your PlayStation needs, helping gamers everywhere gear up and game on.
      </p>
        <h2 class="text">Meet The Founders</h2>
      <div class="founders">
        <div class="founder aboutText">
          <img class="makers" src="https://nasheetajacobs1999.github.io/Node.js-Images/images/20240422_100352.jpg" alt="Founder 1">
          <p>John Doe is the CEO and co-founder of Play Hub. He has over 10 years of experience in the gaming industry and is passionate about creating innovative gaming experiences.</p>
        </div>
        <div class="founder aboutText">
          <img class="makers" src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH-Slogan.png" alt="Founder 2">
          <p>Jane Smith is the CTO and co-founder of Play Hub. She is a seasoned developer with a background in computer science and has developed several successful games.</p>
        </div>
      </div>
    </div>
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
  background-image: linear-gradient(to bottom left, #280677,#271341, #000000) ;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -4rem;
}

.about-info {
  position: relative;
  bottom: 100px;
  padding-top: 80px;
}

.about-info-2{
  margin-top: 7rem;
}

img[alt="web-logo"] {
  height: 120px;
  border-radius: 1rem;
  margin-top: 2rem;
}
.makers {
  transition: filter 0.3s ease-in-out, transform 0.5s ease-in-out;
  filter: grayscale(100%);
}

.makers:hover {
  filter: grayscale(0);
  transform: scale(1.1) translateZ(10px);
}
.name {
  font-family: 'TT Octosquares', sans-serif;
  font-size: 60px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 1rem;
  font-family: "Jersey 10", sans-serif;
}

.text {
  color: whitesmoke;
  font-family: "Jersey 10", sans-serif;
}

.brand {
  color: #0011ff;
  font-family: "Jersey 10", sans-serif;
}

p {
  color: white;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;
}

.founders {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.founder {
  margin: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
}

.founder img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
}

</style>