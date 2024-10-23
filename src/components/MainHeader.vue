<template>
    <header>
      <div class="imgHeader">
        <img :src="logoSeus" alt="imagen" class="headerImage">
      </div>
    </header>
</template>

<script setup>
import logoSeus from "../assets/img/header/logoSeus.svg"

</script>

<style>
header{
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  background: linear-gradient(175deg, #761D74 0%, #0DC6DE 100%);
  height: 120px;
}

.userPerfilIcono{
  height: 20px;
}


.headerImage img{
  height: 43px;
  width: 192px;
}
.imgHeader {
  margin-left: 192px;
}

@media (max-width: 768px) {
  .imgHeader {
    margin-left: 10vw;
  }
}

</style>
