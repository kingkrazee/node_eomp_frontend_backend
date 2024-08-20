<template>
    <div class="container-fluid" id="full-footer">
        <img src="https://nasheetajacobs1999.github.io/Node.js-Images/images/PH.png" alt="FooterLogo" class="FooterLogo">
        <div class="container links">
            <router-link to="/" id="link">Home</router-link>
            <router-link to="/about" id="link">About</router-link>
            <router-link to="/products" id="link">Products</router-link>
            <router-link to="/contact" id="link">Contact Us</router-link>
            <router-link to="/admin" id="link">Admin</router-link>
        </div>
        <div class="container" id="contact-info">
            <h5>Contact Us</h5>
            <div class="socials">
                <span>
                    Nasheeta Jacobs
                </span>
                <span class="icons">
                    <a href="https://wa.me/0635856284" target="_blank">
                        <i class="fa fa-whatsapp"></i>
                    </a>
                    <a href="nasheetahjacobs@gmail.com" target="_blank">
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                </span>
            </div>
            <div class="socials">
                <span>
                    Kayden Hendricks
                </span>
                <span class="icons">
                    <a href="https://wa.me/0719865973" target="_blank"><i class="fa fa-whatsapp"></i></a>
                    <a href="mailto:@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>
<style scoped>
#full-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #020202;
    min-height: 4rem;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#link {
    text-decoration: none;
    color: #B7B5B3;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 400px !important;
    padding: 0;
    margin: 0;
    font-size: small;
    color: white;
}

.links a {
  margin-right: 20px;
}

.icons{
    display: flex;
    gap: 3px;
}
.router-link-exact-active {
    text-decoration: underline !important;
    color: rgb(48, 116, 116) !important;
}

img[alt="FooterLogo"] {
    height: 100px;
}

#contact-info {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0;
}
.socials{
    display: flex;
    gap: 5px;
    justify-content: center;
}
.FooterLogo {
    width: 100px;
    height: 70px;
    border-radius: 1rem;
  } 
  #link {
    transition: all .5s;
    &:hover {
      transform: scale(1.2);
      text-decoration: underline;
    }
  }
</style>