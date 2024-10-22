<template>
  <div class="iconos">
    <div class="icono">
      <img :src="busquedaIcon" alt="lupa" class="lupa" />
    </div>
    <div class="icono">
      <img :src="playIcon" alt="play" class="play" />
    </div>
    <div class="icono">
      <img :src="empresaIcon" alt="empresa" class="empresa" />
    </div>
  </div>
</template>

<script setup>
import busquedaIcon from "../assets/img/iconsMain/busquedaIcon.svg";
import empresaIcon from "../assets/img/iconsMain/empresaIcon.svg";
import playIcon from "../assets/img/iconsMain/playIcon.svg";
</script>

<style scoped>
.iconos {
  display: flex;
  gap: 30px;
  align-items: center;
  /* border-top: 1px solid #023D6A; */
}

.icono {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 112px;
  width: 112px;
  background-color: #d9d9d9;
  border-radius: 60%;
}
.lupa {
  height: 46px;
  width: 40.89px;
}
.play {
  height: 42px;
  width: 42px;
}
.empresa {
  height: 53px;
  width: 61px;
}

@media screen and (min-width: 1511px) {
  .icono {
    height: 128px;
    width: 128px;
  }
  .iconos{
    width: 100%;
    justify-content: center;
  }
}
</style>
