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
  display: flex;
  justify-content:space-between;
  height: 31px;
  margin-top: 20px;
  align-items: center;
}
.botones_opinion-first,
.botones_opinion-second{
  display: flex;
  align-items: center;
  gap: 8px;
  border-style:dashed;
  border-radius: 6px;
  border-color: #045480;
  width: 126px;
  height: 31px;
  transition: background-color 3ms;
}
.botones_opinion-first:hover,
.botones_opinion-second:hover{
background-color: rgb(242, 216, 20);
}
.botones_opinion-first img {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
</style>
