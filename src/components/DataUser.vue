<template>
<div class="dates">
  <div class="date">
    <p class="titulos">Email:</p>
    <p class="dates">correo@gmail.com</p>
  </div>
  <div class="date">
    <p class="titulos">Documento:</p>
    <p class="dates">CC # 1022345789</p>
  </div>
  <div class="date">
    <p class="titulos">Password:</p>
    <p class="dates">****************</p>
  </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.dates{
  display: flex;

}
.date{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 55px;
  width: 256px;
}
.dates{
  color: rgba(2, 61, 106, 1);
  font-weight: 500;
  line-height: 19.5px
;
}
.titulos{
  color: rgba(158, 158, 158, 1) ;
  line-height: 17px
;
}
</style>
