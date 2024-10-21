<template>
  <Main class="grid_container">
    <div class="fotografia">
      <div class="fotografia_fondo">
        <img :src="camara" alt="camara">
      </div>
    </div>
    <div class="datos">
      <div class="name">
        <p>Bienvenidos
          <br>
          <span>Francisco José Benavides</span>
        </p>

      </div>
      <div class="datos_user">
          <DataUser/>
      </div>
    </div>
    <div class="lapiz_icon">

      <InicioPerfil/>
    </div>
  </Main>
</template>

<script setup>
import camara from "../assets/img/perfil/camara.svg"
import InicioPerfil from "./InicioPerfil.vue"
import DataUser from "./DataUser.vue"
</script>

<style scope>
.grid_container{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
  gap: 33px;
  position: relative;
}
.fotografia_fondo{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(184, 188, 251, 1);
  border-radius: 200px;
  height: 255px;
  width: 255px;
  position: relative;
  top: -90px;

}
.lapiz_icon{
  position: absolute;
  right: 100px;
  bottom: -100px;
}
.fotografia_fondo img{
  height: 113px;
  width: 159px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.fotografia_fondo:hover {
  background-color: rgba(198, 203, 210, 1); /* Cambia el color de fondo */
}

.name p{
  font-size: 24px;
  color: rgba(2, 61, 106, 1);
}
.name span{
  font-size: 34px;
  color: rgba(2, 61, 106, 1);
;
}
</style>
