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
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.titulo{
  text-transform: uppercase;
  font-size: 66px;
  text-align: left;
  margin: 0 0 0 72px;
  color: #023D6A;
  font-weight: 700;
}
.titulo p{
  margin: 56px 0 24px 0;
}

.cards{
  background-color:rgba(168, 168, 168, 0.3);
  border-radius: 20px 20px 0 0;
  margin-right: 96px;
  position: relative;
  top: -68px;
}
.titulo_form{
  text-transform:uppercase;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #023D6A;
  font-size: 38px;
  font-weight: 600;
  margin: 50px 72px 0 72px;

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
  padding-left: 62px;
  padding-top: 105px;
  line-height: 29.26px;
  width: 331px;
  height: 29px;
}
</style>
