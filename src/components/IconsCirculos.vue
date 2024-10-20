<template>
   <div class="iconos">
      <div class="icono">
        <img :src="busquedaIcon" alt="lupa">
      </div>
      <div class="icono">
        <img :src="playIcon" alt="">
      </div>
      <div class="icono">
        <img :src="empresaIcon" alt="">
      </div>
    </div>
</template>

<script setup>
import busquedaIcon from "../assets/img/iconsMain/busquedaIcon.svg"
import empresaIcon from "../assets/img/iconsMain/empresaIcon.svg"
import playIcon from "../assets/img/iconsMain/playIcon.svg"
</script>

<style scoped>
.iconos{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 216px;
  border-top: 1px solid #023D6A;

}
.icono{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 128px;
  width: 128px;

  background-color: #D9D9D9;
  border-radius: 50%;
}
</style>
