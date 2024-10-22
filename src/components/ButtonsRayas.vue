<template>
  <div class="botones_opinion">
    <button class="botones_opinion-first"> <img :src="estrella" alt=""><span>Preguntar</span></button>
    <button class="botones_opinion-second"> <img :src="flecha" alt=""><span>Recomendar</span></button>
  </div>
</template>

<script setup>
import estrella from "../assets/img/Buttons/estrella.svg"
import flecha from "../assets/img/Buttons/flecha.svg"
</script>

<style>
.botones_opinion{
  width: 268px;
  padding: 0 5.6px 0 7px;
  display: flex;
  height: 31px;
  gap: 10px;
  align-items: center;
}

.botones_opinion-first,
.botones_opinion-second{
  height: 31px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  gap: 10px;
  border-style:dashed;
  border-radius: 8px;
  border-color: #045480;
  transition: background-color 3ms;
  padding: 4px 12px;
}
.botones_opinion-first{
  width: 118px;
}
.botones_opinion-second{
  width: 126px;
}

.botones_opinion-first:hover,
.botones_opinion-second:hover{
  background-color: rgb(242, 216, 20);
}

.botones_opinion-first img {
  width: 13.34px;
  height: 13.68px;
  object-fit: contain;
}
</style>
