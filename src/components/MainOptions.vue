<template>
<div class="options_container">
  <div class="container_margen">
    <div class="title">
      <p>Configura esta sección para un perfil más detallado</p>
    </div>
    <div class="sections_options">
      <OptionsPerfilGrid/>
    </div>
    <div class="sections_options">
      <OptionsPerfilGrid/>
    </div>
  </div>
</div>
</template>

<script setup>
import OptionsPerfilGrid from './OptionsPerfilGrid.vue';
</script>

<style scoped>
.options_container{
  width: 100%;
  background-color: rgba(237, 238, 241, 1);
}

.container_margen{
  width: 1200px;
  height: auto;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
}

.title{
  display: flex;
  justify-content: center;
}

.title p{
  font-size: 24px;
  font-weight: 700;
  color: rgba(2, 61, 106, 1);
}

.sections_options{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>


