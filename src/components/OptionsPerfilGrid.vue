<template>
<div class="options_grid">
  <div class="title">
    <p>Tipo de formación y empleo que buscas:</p>
  </div>
  <div class="grid_dos">
    <OptionsPerfil
    v-for="(option, index) in options"
    :key="index"
    :optionLogo="option.optionLogo"
    :name="option.name"
    />

  </div>
</div>
</template>

<script setup>
import OptionsPerfil from './OptionsPerfil.vue';
import areas_humanas from "../assets/img/optionsLogo/areas_humanas.svg"
import areas_financieras from "../assets/img/optionsLogo/areas_financieras.svg"
import areas_comerciales from "../assets/img/optionsLogo/areas_comerciales.svg"
import areas_deLogistica from "../assets/img/optionsLogo/areas_deLogistica.svg"
import areas_generica from "../assets/img/optionsLogo/areas_generica.svg"

const options= [
  {name: "Áreas Humanas", optionLogo:  areas_humanas},
  {name: "Áreas Financieras", optionLogo:  areas_financieras},
  {name: "Áreas Comerciales", optionLogo:  areas_comerciales},
  {name: "Áreas de Lógistica", optionLogo:  areas_deLogistica},
  {name: "Áreas Genérica", optionLogo:  areas_generica},
]
</script>

<style scoped>
.options_grid{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap:nowrap;
}
.title{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 16px;
  color: rgba(2, 61, 106, 1);
}
.grid_dos{
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>

