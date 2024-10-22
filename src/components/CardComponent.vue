<template>
  <div>
    <div class="card_sola">
      <div class="logo_card">
        <div class="logo_card-background">
          <img :src="cardLogo" alt="Logo" />
        </div>
      </div>
      <div class="card_image">
        <img :src="cardImage" alt="Imagen de la oferta" />
      </div>
      <div class="card_info">
        <div class="card_title">
          <p><span>Líder de Ventas</span> <br> (canal natural)</p>
        </div>
        <div class="card_description">
          <p >{{ description }}</p>
        </div>
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
defineProps(['description', 'cardLogo', 'cardImage']);
</script>

<style scoped>
.card_sola {
  max-width: 268px;
  height:auto;
  border-radius: 12px;
  padding-bottom: 20px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  gap: 6px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
}
.card_image{
  height: 155px;
  width: 268px;
}

.card_image img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card_info{
  width: 268px;
  height: 152px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.card_info p{
  font-size: 14px;
}
.card_info span{
  font-size: 18px;
  font-weight: 700;
}
.card_title{
  width:238px;
  height: 38px;
}
.card_description{
width: 238px;
height: 88px;
}

.logo_card{
  width: 96px;
  height: 96px;
  display: flex;
  position: absolute;
  top: -46px;
  left: 18px;
  background: linear-gradient(45deg, #761d74 40%, #0dc6de 60%);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.logo_card-background{
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 85px;
  height: 85px;
}

.card_button{
  width: 268px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 18px;

}

button{
  cursor: pointer;
}

.card-button-firts,
.card-button-second{
  border-radius: 28px;
  height: 41px;
  width: 198px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
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

.buttons_rayas{
  margin: 29px 0 44px 0 ;
}
</style>
