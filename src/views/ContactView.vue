<template>
  <section class="back">
    <div class="cont-1">
        <div class="container text-center pt-5">
      <h3 class="sectHeader">Contact Us</h3>

      <div class="form-card1">
        <div class="form-card2">
          <form class="form"
                action="https://formspree.io/f/mqkrjaka"
                method="POST">
            <p class="form-heading">Get in the Game - Reach Out to Us!</p>

            <label>
              <div class="form-field">
                <input required placeholder="Name" class="input-field" type="text" />
              </div>
            </label>

            <label>
              <div class="form-field">
                <input
                  required
                  placeholder="Email"
                  class="input-field"
                  type="email" name="email"
                />
              </div>
            </label>

            <label>
              <div class="form-field">
                <input
                  required
                  placeholder="Subject"
                  class="input-field"
                  type="text"
                />
              </div>
            </label>

            <label>
              <div class="form-field">
                <textarea
                  required
                  name="message"
                  cols="30"
                  rows="3"
                  class="input-field"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </label>

            <label>
              <button class="message-btn" type="submit">Submit</button>
            </label>

          </form>
        </div>
      </div>

    </div>

    <div class="contDetails justify-content-around text-center">
      <a href="mailto:nasheetahjacobs@gmail.com" class="mail-link">
        <i class="fa-solid fa-envelope"></i>
        nasheetahjacobs@gmail.com
      </a>
      <a href="tel:+27635856284" class="phone-link">
        <i class="fa-solid fa-phone"></i>
        +27 63 585 6284
      </a>
    </div>
    </div>
      
  </section>
</template>

<script>
export default {
  // data(){
  //   return {
  //     gifyUrl: "https://nasheetajacobs1999.github.io/Node.js-Images/images/contact_gif.gif"
  //   }
  // }
};
</script>

<style scoped>
.back{
  background-image: url(https://nasheetajacobs1999.github.io/Node.js-Images/images/contact_gif.gif);
  background-size: cover;
  position: relative;
  margin-top: -4rem;
}
.cont-1{
  margin-top: 5rem;
}
.sectHeader{
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: aliceblue;
}
/* Form Styles */
.form {
  display: flex;
  flex-direction: column;
  align-self: center;
  font-family: "Press Start 2P", cursive; /* Gaming-inspired font */
  gap: 10px;
  padding-inline: 2em;
  padding-bottom: 0.4em;
  background-color: #1b1b1b; /* Darker background for a gaming vibe */
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px rgba(0, 255, 255, 0.1); /* Neon glow */
  width: 500px;
}

.form-heading {
  text-align: center;
  margin: 2em;
  color: #00ffcc; /* Neon green-blue text */
  font-size: 1.5em;
  background-color: transparent;
  align-self: center;
}

.form-field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 10px;
  padding: 0.6em;
  border: none;
  outline: none;
  background-color: #333; /* Darker input fields */
  box-shadow: inset 2px 5px 10px rgba(0, 255, 255, 0.3); /* Subtle inner glow */
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #00ffcc; /* Neon text */
  padding-inline: 1em;
  font-family: "Press Start 2P", cursive;
}

.message-btn {
  cursor: pointer;
  margin-bottom: 3em;
  padding: 1em;
  border-radius: 10px;
  border: none;
  background-color: #00ffcc; /* Neon button */
  color: #1b1b1b;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
}

.message-btn:hover {
  background-color: #1b1b1b;
  color: #00ffcc;
  box-shadow: 0px 0px 15px 5px rgba(0, 255, 255, 0.5); /* Glow on hover */
}

.form-card1 {
  background-color: rgba(27, 27, 27, 0.5);
  border-radius: 22px;
  transition: all 0.3s;
  width: 500px;
  margin-left: 25rem;
}

.form-card1:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 255, 0.3); /* Larger neon glow */
}

.form-card2 {
  background-color: rgba(27, 27, 27, 0.5);
  border-radius: 22px;
  transition: all 0.2s;
  width: 500px;
}

.form-card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

/* Contact Details Styles */
.contDetails {
  padding: 20px;
  color: #00ffcc; /* Neon color for text */
  font-family: "Press Start 2P", cursive;
}

.mail-link, .phone-link {
  color: #00ffcc;
  text-decoration: none;
}

.mail-link:hover, .phone-link:hover {
  text-decoration: underline;
  color: #ff007f; /* Hot pink for hover effect */
}
.gify2{
  margin-top: 7rem;
}
.row{
  margin: 0 --15px;
}
.col{
  padding: 0 15px;
}

/* Responsive Adjustments */
@media (max-width: 1000px) {
  .contactMe {
    flex-direction: column;
  }

  form {
    width: 100%;
  }
  .cardContact {
    width: 100%;
  }
}

@media (max-width: 440px) {
  .inf1 {
    width: 100%;
  }
}

@media (max-width: 370px) {
  .btn1 {
    margin-right: 0.3rem;
  }
}
</style>
