<template>
  <Main class="grid">
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
  </Main>
</template>

<script setup>
import camara from "../assets/img/perfil/camara.svg"
import DataUser from "./DataUser.vue"
</script>

<style scope>
.grid{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 300px;

  gap: 33px;
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
.fotografia_fondo img{
  height: 113px;
  width: 159px;
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
