<template>
  <div class="container-fluid home">
    <div class="col">
        <h1 class="homeHeader">PLAY HUB</h1>
      <p class="slogan">Gear up, Game on.</p>
      <button class="btn" @click="$router.push('/products')">Shop Now<img src="https://nasheetajacobs1999.github.io/Node.js-Images/images/RightArrowHomeBtn.jpg" alt="Arrow Right" class="arrow-icon"></button>
    </div>
  </div>
</template>

	

<style>
.home{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://nasheetajacobs1999.github.io/Node.js-Images/images/4k PS5 neon controller.png');
  background-size: cover;
  background-position: center;
  /* padding: 4rem; */
  margin-top: -4rem;
}
.slogan {
  font-family: 'TT Octosquares', sans-serif;
  font-size: 5rem;
  color: whitesmoke;
  font-family: "Jersey 10", sans-serif;
}
.homeHeader {
  font-size: 7rem;
  font-weight: bolder;
  color: rgb(207, 70, 200);
  font-family: "Jersey 10", sans-serif;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 1rem;
  margin-left: 3rem;
  animation: motion 3s ease-in-out infinite;
}
.col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}
.btn {
  background-color: #313250;
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

.slogan {
overflow: hidden;
white-space: nowrap;
width: 0;
animation: typing 3s steps(40, end) forwards;
}
/* animations */
@keyframes typing {
  from { width: 0}
  to { width: 100%}
}
@keyframes motion {
  0%, 100% {
    transform: perspective(500px) translateZ(0);
  }
  50% {
    transform: perspective(500px) translateZ(50px);
  }
}
/* gradient colour change */

</style>