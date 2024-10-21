<template>
  <div class="card_flex">
    <div class="card">
      <div class="logo_card">
        <div class="logo_card-background">
          <img :src="cardLogo" alt="Logo" />
        </div>
      </div>
      <div class="card_image">
        <img :src="cardImage" alt="Imagen de la oferta" />
      </div>
      <div class="card_info">
        <p>{{ title }}</p>
        <p>{{ description }}</p>
      </div>
      <div class="card_button">
        <button class="card-button-firts">Leer más</button>
        <button class="card-button-second">Aplicar a oferta</button>
      </div>
    </div>
    <div class="buttons_rayas">
      <ButtonsRayas/>
    </div>
  </div>
</template>

<script setup>
import ButtonsRayas from "./ButtonsRayas.vue"
defineProps(['title', 'description', 'cardLogo', 'cardImage']);
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 268px;
  height:431px;
  margin-top: 2rem;
  border: 1px solid #beb9b9;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(86, 85, 85, 0.5);
}

.card_info{
  padding: 5px 20px;
}

.logo_card{
  display: flex;
  position: absolute;
  top: -50px;
  left: 25px;
  background: linear-gradient(112.76deg, #761D74 0.53%, #0DC6DE 100%);
  width: 96px;
  height: 96px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}

.logo_card-background{
  display: flex;
  background-color: #E6E6E6;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 85px;
  height: 85px;
}

.card_button{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

button{
  cursor: pointer;
}

.card-button-firts,
.card-button-second{
  border-radius: 50px;
  height: 41px;
  width: 198px;
  font-weight: 700;
}

.card-button-firts{
  border: 1px solid #06759F;
  background-color: rgba(251, 248, 248, 0.959);
  color:#06759F ;
  transition: background-color 3ms;
}

.card-button-second{
  border: none;
  background-color: #0DC6DE;
  color: #CDFDF3;
  transition: background-color 3ms;
}

.card-button-firts:hover{
  background-color: rgba(221, 221, 221, 0.959);
  color: black;
  border:1px solid black;
}

.card-button-second:hover{
  background-color:#06759F;
  color: white;
  border:1px solid white;
}
</style>
