<template>
  <div class="main_container">
    <div>
      <h1 class="titulo">Personas</h1>
    </div>

    <div class="grid">

      <div class="form">
        <div class="titulo_form">
              <p>Empieza tu carrera hoy mismo</p>
        </div>
          <FormComponent />
      </div>

      <div class="contenedor_cards">
        <div class="cards">
          <div class="div1">
            <div class="carTitle">
              <p>Mercado de oportunidades</p>
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
import FormComponent from '../FormComponent.vue';
import CardsGrid from '../CardsGrid.vue';
import IconsCirculos from "../IconsCirculos.vue"
/* import Fondo from "../assets/img/fondo/fondo.svg" */
</script>

<style scoped>
.main_container{
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),
              url('../../assets/img/fondoBlack/fondoBlack.svg');
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.titulo{
  width: 385px;
  height: 80px;
  text-transform: uppercase;
  font-size: 66px;
  text-align: left;
  margin: 56px 936px 24px 191px;
  color: #023D6A;
  font-weight: bold;
}

.form{
  border-top: 24px solid #601565;
 width: 100%;
 max-width: 756px;
}
.titulo_form{
  height:  auto;
  width: auto;
  color: #023D6A;
  font-size: 38px;
  text-transform: uppercase;
  margin: 70px 186px 65px 136px;
  font-weight: 600;
  text-align: left;
  line-height: auto;
  line-height: 1.2;
  max-width: 400px;
}

/* .contenedor_cards{

} */

.cards{
width: 100%;
min-height: 980px;
max-width: 660px;
border-radius: 40px 40px 0 0;
margin-top:  -50px;
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
.cards_titulo{
  width: 331px;
  height: 29px;
  font-size: 24px;
  color: #023D6A;
  font-weight: 500;
  text-align: top;
  white-space: nowrap;
  margin: 30px auto;
}

.cards_container_icon{
  width: 660px ;
  height: 217px;
}



</style>
