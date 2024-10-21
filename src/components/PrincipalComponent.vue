<template>
  <div class="main_container">
    <div class="titulo">
      <p>Personas</p>
    </div>

    <div class="grid">
      <div class="formulario_container">
        <div class="titulo_form">
              <p>Empieza tu carrera <br> hoy mismo</p>
        </div>
        <FormComponent />
      </div>

      <div class="cards">
        <div class="cards_container">
          <div class="cards_titulo">
            <p>Mercado de oportunidades</p>
          </div>
          <CardsGrid/>
        </div>
        <div class="cards_container_icon">
          <IconsCirculos/>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormComponent from './FormComponent.vue';
import CardsGrid from './CardsGrid.vue';
import IconsCirculos from "./IconsCirculos.vue"


</script>

<style scoped>
.grid{
  display: flex;
  flex-direction: column;
}

.titulo{
  text-transform: uppercase;
  font-size: 66px;
  text-align: left;
  margin: 0 0 0 30px;
  color: #023D6A;
  font-weight: 700;
}


@media (min-width: 1000px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 700px) {
  .titulo{
    margin: 0 0 0 40px;
  }
}


.titulo p{
  margin: 56px 0 24px 0;
}

.cards{
  background-color:rgba(168, 168, 168, 0.3);
  border-radius: 20px 20px 0 0;
  margin: 0 12px;
}

@media (min-width: 769px){
  .cards{
    margin: 0 20px 0 0;
    margin-top:-50px;
  }
}

.titulo_form{
  text-transform:uppercase;
  color: #023D6A;
  font-size: 38px;
  font-weight: 600;
  padding: 50px 12px 0 12px;
  text-align: center;
}

@media (min-width: 769px) {
.titulo_form{
  text-align: left;
  padding: 50px 50px 0 50px;
}
}

.titulo_form p{
  margin: 0;
}
.formulario_container{
  border-top: 24px solid #601565;
}

.cards_titulo{
  font-size: 30px;
  color: #023D6A;
  font-weight: 500;
  margin-bottom: 95px;
  padding-left: 40px;
  padding-top: 40px;
  line-height: 29.26px;
  width: 331px;
  height: 29px;
}

@media (min-width: 770px) {
  .cards_titulo{
    margin-bottom: 95px;
  padding-left: 62px;
  padding-top: 105px;
  line-height: 29.26px;
  width: 440px;
  height: 29px;
  }
}

.cards_titulo p{
  margin: 0;
}
</style>
