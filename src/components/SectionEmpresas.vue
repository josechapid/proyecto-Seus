<template>
<section class="empresas_container">
  <div class="empresas">
    <img :src="logoCocacola" alt="Cocacola" class="logo_cocacola">
    <img :src="logoBancolombia" alt="Bancolombia" class="logo_bancolombia">
    <img :src="logoNutresa" alt="Nutresa" class="logo_nutresa">
    <img :src="logoVelez" alt="Velez" class="logo_velez">
    <img :src="logoCocacola" alt="Cocacola" class="logo_cocacola">
    <img :src="logoBancolombia" alt="Bancolombia" class="logo_bancolombia">
    <img :src="logoNutresa" alt="Nutresa" class="logo_nutresa">
    <img :src="logoVelez" alt="Velez" class="logo_velez">

  </div>
</section>
</template>

<script>
import logoCocacola from "../assets/img/Empresas/cocacola.svg"
import logoBancolombia from "../assets/img/Empresas/bancolombia.svg"
import logoNutresa from "../assets/img/Empresas/nutresa.svg"
import logoVelez from "../assets/img/Empresas/velez.svg"

export default {
  data(){
    return{
      logoCocacola,
      logoNutresa,
      logoBancolombia,
      logoVelez,
    }
  }
}
</script>

<style>
.empresas_container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFEFEF ;
  height: 84px;
  padding: 10px;
}

.empresas{
  width: 816px;
  height: 49px;
  display: flex;
  justify-content: space-between;
  margin: 17.5px 348px;

  align-items: center;
  gap: 40px;
}
.logo_cocacola{
width: 71px;
height: 22px;
}
.logo_bancolombia{
width: 101px;
height: 37px;
}
.logo_nutresa{
width: 35px;
height: 47px;
}
.logo_velez{
width: 60px;
height: 49px;
}

</style>
