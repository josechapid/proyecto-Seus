<template>
  <MainHeader></MainHeader>
  <div class="background">
    <button><img :src="lapiz" alt="lapiz"><span> Editar</span> </button>
  </div>
  <PerfilDate></PerfilDate>
  <MainOptions></MainOptions>
  <SectionEmpresas></SectionEmpresas>
  <MainFooter></MainFooter>
</template>

<script setup>
import MainHeader from "../components/MainHeader.vue"
import MainFooter from "../components/MainFooter.vue"
import SectionEmpresas from "../components/SectionEmpresas.vue"
import lapiz from "../assets/img/perfil/lapiz.svg"
import PerfilDate from "../components/PerfilDate.vue"
import MainOptions from "@/components/MainOptions.vue"

</script>

<style scoped>
.background{
  background-image: url("../assets/img/perfil/fondo.jpeg");
  height: 217px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.background button{
  position: absolute;
  right: 100px;
  top: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 36px;
  border-radius: 50px;
  border: none;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.background button:hover{
  background-color: #555;
  color: white;
}
</style>


