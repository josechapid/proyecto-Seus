<template>
  <div class="cards_grid_tarjets">
    <CardComponent
      v-for="(card, index) in cards"
      :key="index"
      :description="card.description"
      :cardLogo="card.logo"
      :cardImage="card.image"
    />
  </div>
</template>

<script setup>
import CardComponent from './CardComponent.vue';
import logo from '../assets/img/cards/card_logo.svg';
import image from '../assets/img/cards/card_img.svg';

const cards = [
  { description: 'Buscamos líder comercial apasionado(a) por el bienestar y la alimentación saludable, empática y con orientacion al logro...', logo: logo, image: image },
  { description: 'Buscamos líder comercial apasionado(a) por el bienestar y la alimentación saludable, empática y con orientacion al logro...', logo: logo, image: image }
];
</script>

<style scoped>
.cards_grid_tarjets {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: nowrap;
  gap: 40px;
}
</style>
