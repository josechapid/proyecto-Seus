<template>
<section class="empresas_container">
  <div class="empresas">
    <img :src="logoCocacola" alt="Cocacola">
    <img :src="logoBancolombia" alt="Bancolombia">
    <img :src="logoNutresa" alt="Nutresa">
    <img :src="logoVelez" alt="Velez">
    <img :src="logoCocacola" alt="Cocacola">
    <img :src="logoBancolombia" alt="Bancolombia">
    <img :src="logoNutresa" alt="Nutresa">
    <img :src="logoVelez" alt="Velez">
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
  background-color: #EFEFEF ;
  height: 84px;
}
.empresas{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
