<template>
<div class="containerPrincipal">
  <div class="nameUser">
   <p>Francisco</p>
   <p>¡Bienvenido!</p>
  </div>
  <div class="imageUser">
    <img :src="clip" alt="imgUser">
  </div>
  <div class="barrasLaterales">
    <img :src="user" alt="barras">
  </div>

</div>
</template>


<script setup>
import user from "../../../assets/img/icons/b19a17f28f4e0b7641ef62d8690f7dd5.jpg"

import clip from "../../../assets/img/icons/clip.svg"

import { onMounted } from 'vue';
onMounted(() => {
  console.log("Componente montado. Imagen de usuario:", user);
});

</script>

<style scoped>
.containerPrincipal{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(18, 105, 182);
}
.nameUser{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #cdfdf3;
}

.imageUser{
  border-radius: 50%;
  width: 56px;
  height: 56px;
  background: linear-gradient(110deg, #761d74 0%, #0dc6de 100%);
}

.imageUser img{
  width: 49px;
  height: 49px;
  border-radius: 50%;
}
.barrasLaterales{
  fill:#cdfdf3;
}

</style>
