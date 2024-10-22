<template>
  <section class="empresas_container">
    <div class="empresas">
      <img :src="logoCocacola" alt="Cocacola" class="logo_cocacola" />
      <img :src="logoBancolombia" alt="Bancolombia" class="logo_bancolombia" />
      <img :src="logoNutresa" alt="Nutresa" class="logo_nutresa" />
      <img :src="logoVelez" alt="Velez" class="logo_velez" />
      <img :src="logoCocacola" alt="Cocacola" class="logo_cocacola hidden"  />
      <img :src="logoBancolombia" alt="Bancolombia" class="logo_bancolombia hidden" />
      <img :src="logoNutresa" alt="Nutresa" class="logo_nutresa hidden"  />
      <img :src="logoVelez" alt="Velez" class="logo_velez hidden" />
    </div>
  </section>

</template>

<script>
import logoCocacola from "../assets/img/Empresas/cocacola.svg";
import logoBancolombia from "../assets/img/Empresas/bancolombia.svg";
import logoNutresa from "../assets/img/Empresas/nutresa.svg";
import logoVelez from "../assets/img/Empresas/velez.svg";

export default {
  data() {
    return {
      logoCocacola,
      logoNutresa,
      logoBancolombia,
      logoVelez,
    };
  },
};

</script>

<style>
.empresas_container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  width: 100%;
  height: 81px;
}

.empresas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 16px;
}

 .hidden {
  display: none;
}

@media (min-width: 746px) {
  .hidden {
    display: inline;
  }
  .empresas_container{
    flex-direction: row;
    justify-content: space-around;
    gap: 300px;
  }
}


.logo_cocacola {
  width: 71px;
  height: 22px;
}
.logo_bancolombia {
  width: 101px;
  height: 37px;
}
.logo_nutresa {
  width: 35px;
  height: 47px;
}
.logo_velez {
  width: 60px;
  height: 49px;
}



</style>
