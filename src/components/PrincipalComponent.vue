<template>
  <div class="main_container">
    <div class="titulo">
      <p >Personas</p>
    </div>

    <div class="grid">

      <div class="form">
        <div class="titulo_form">
              <p>Empieza tu carrera hoy mismo</p>
              <div class="barraCorta"></div>
        </div>
          <FormComponent />
      </div>

      <div class="contenedor_cards">
        <div class="cards">
          <div class="div1">
            <div class="carTitle">
              <p>Mercado de oportunidades</p>
              <div class="barraCorta"></div>
            </div>
            <div class="carTarjeta">
              <CardsGrid/>
            </div>
          </div>
          <div class="div2">
              <IconsCirculos/>
          </div>
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

.main_container{
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),
              url('./../assets/img/fondoBlack/fondoBlack.svg');
  background-size:auto;
  background-repeat: no-repeat;
  /* background-color: aqua;
  display: flex;
  flex-direction: column; */
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 10px;
}

.titulo{
  height: auto;
  text-transform: uppercase;
  font-size: 66px;
  text-align: left;
  color: #023D6A;
  font-weight: bold;
  padding-top: 56px;
  padding-bottom: 24px;
  padding-left: 191px;
}

.form{
  border-top: 24px solid #601565;
 width: 100%;
 max-width: 756px;
}
.titulo_form{
  height:  auto;
  width: 500px;
  color: #023D6A;
  font-size: 38px;
  text-transform: uppercase;
  margin: 70px 0 65px 136px;
  font-weight: 600;
  text-align: left;
  line-height: auto;
  max-width: 500px;
}
.contenedorCards{
  background-color: #FFFFFF;
  max-width: 756px;
}
.cards{
width: 100%;
min-height: 980px;
max-width: 660px;
border-radius: 40px 40px 0 0;
background-color: rgba(168, 168, 168, 0.1);

margin-top: -50px ;
}

.cards_container{
  min-height: 764px;
  background-color: aqua;
  display: flex;
  flex-direction: column;

}
.div1{
  display: flex;
  flex-direction: column;
}
.carTitle{
  width: 331px;
  height: 29px;
  font-size: 24px;
  color: #023D6A;
  font-weight: 500;
  text-align: top;
  white-space: nowrap;
  margin: 105px 0 95px 105px;
}
.barraCorta{
  width: 64px;
  height: 8px;
  background-color: #601565;
  border-radius: 7px;
}

.cards_container_icon{
  width: 660px ;
  height: 217px;
}



</style>
