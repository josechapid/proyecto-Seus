<template>
<footer>
  <div class="container">
    <div class="barra">
      <div>
        <p>Powered by SolutionSolt.com</p>
      </div>
      <div class="redes">
        <img :src="logoFacebook" alt="facebook">
        <img :src="logoX" alt="x">
        <img :src="logoInstagram" alt="instagram">
      </div>
    </div>
  </div>
</footer>

</template>

<script>
import logoFacebook from "../assets/img/footer/logoFacebook.svg"
import logoX from "../assets/img/footer/logoX.svg"
import logoInstagram from "../assets//img/footer/logoInstagram.svg"

export default {
  data(){
    return{
      logoFacebook,
      logoInstagram,
      logoX,
    }
  }
}
</script>

<style>
footer{
  background-color: #023D6A;
  color: white;
}

.barra{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100px;
width: 100%;
}

@media (min-width: 768px) {
  .barra{
    flex-direction: row;
    justify-content: space-around;
    gap: 300px;
  }
}

.redes{
  display: flex;
  gap: 23px;
}
</style>
