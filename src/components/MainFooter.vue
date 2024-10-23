<template>
<footer class="footer_container">
      <div class="descriptionEmpresa">
        <p>Powered by SolutionSolt.com</p>
      </div>
      <div class="redes">
        <img :src="logoFacebook" alt="facebook">
        <img :src="logoX" alt="x">
        <img :src="logoInstagram" alt="instagram">
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
.footer_container{
  display: flex;
  flex-direction: column;
  gap:24px;
  align-items: center;
  background-color: #023D6A;
  color: white;
  padding: 18px ;
  height: 100px;
}

.descriptionEmpresa{
  width: 142px;
  height: 12px;
  font-family:'Inter', sans-serif;
  font-size: 10px;
  font-weight: 400;
  text-align: left;
  columns: #FFFFFF;
  overflow: hidden;
  white-space: nowrap;
}

.redes{
  display: flex;
  justify-content: space-between;
  width: 121px;
  height: 25px;
  display: flex;
  gap: 23px;
}
.redes img{
  width: 25px;
  height: 25px;
}

@media (min-width: 760px) {
  .footer_container{
    flex-direction: row;
    justify-content: space-around;
    gap: 300px;
  }
}



</style>
