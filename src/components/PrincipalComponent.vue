<template>
  <div class="main_container">
    <div class="container-left">
      <div class="titulo">
        <p>Personas</p>
      </div>
      <div class="form-conteiner">
        <div class="titulo_form">
          <p>Empieza tu carrera hoy mismo</p>
          <div class="barraCorta"></div>
        </div>
        <FormComponent />
      </div>
    </div>
    <div class="container-right">
      <div class="fondoCard"></div>
      <div class="cards">
        <div class="carTitle">
          <p>Mercado de oportunidades</p>
          <div class="barraCorta"></div>
        </div>
        <div class="carTarjeta">
          <CardsGrid />
        </div>
        <div class="div2">
          <IconsCirculos />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormComponent from "./FormComponent.vue";
import CardsGrid from "./CardsGrid.vue";
import IconsCirculos from "./IconsCirculos.vue";
</script>

<style scoped>
.main_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    url("./../assets/img/fondoBlack/fondoBlack.svg");
  background-size: auto;
  background-repeat: no-repeat;
}

.container-left {
  padding-bottom: 24px;
  border-bottom: 1px solid #023d6a;
}
.container-left .titulo {
  display: flex;
  width: 396px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border-bottom: 24px solid #601565;
  padding: 16px;
}
.titulo_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  color: #023d6a;
}

.form-conteiner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 396px;
  gap: 24px;
}


.titulo {
  font-size: 56px;
  color: #023d6a;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}

.container-right {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 396px;
  padding-top: 24px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 31px;
}

.carTitle {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 24px;
  color: #023d6a;
  gap: 5px;
}
.carTarjeta {
  display: flex;
  align-items: left;
  flex-wrap: nowrap;
}
.div2 {
  display: flex;
  gap: 30px;
  width: 396px;
  height: 157px;
}
.barraCorta {
  width: 64px;
  height: 8px;
  background-color: #601565;
  border-radius: 7px;
}

.cards_container_icon {
  width: 660px;
  height: 217px;
}


@media screen and (min-width: 712px) {
  .carTarjeta {
    justify-content: center;
    align-items: center;
  }
  .form-conteiner {
    width: 75%;
    margin: 0 auto;
  }
  .container-left .titulo {
    width: 100%;
  }
}

@media screen and (min-width: 1200px) {

  .main_container {
    flex-direction: row;

    width: 100%;
    align-items: start;
  }
  
  .container-right {
    width: 756px;
    height: 1068px;
    /* background-color: #366386; */
    position: relative;
  }
  .container-left {
    justify-content: center;
    width: 749px;
    height: 1068px;
  }
  .form-conteiner {
    width: 75%;
  }
  .form-conteiner {
    margin-left: 136px;
  }
  .container-left .titulo {
    width: 100%;
  }
  .cards {
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    position: absolute;
    bottom: 0;
    left: 0;
   /*  background-color: rgba(145, 163, 163, 0.474); */
    width: 660px;
    height: 980px;
  }
  .carTitle{
    margin-right: 130px;
    font-size: 32px;
  }
  .titulo_form{
    margin-top: 46px;
    margin-bottom: 45px;
  }
  .fondoCard {
    width: 660px;
    height: 1014px;
    justify-content: center;
    position: absolute;
    background-color: rgba(168, 168, 168, 0.3);
    opacity: 30%;
    padding: 107px 0px 44px 0px;
    border-radius: 40px 40px 0px 0px;
    margin-top: 30px;
  }
  .cards_container_icon {
    width: 100%;
    margin-right: 40px;
}
.div2{
  justify-content: center;
  align-items: center;

  width: 100%;
}

  .container-left {
    border-bottom: none;
  }
  /* .titulo {
    height: auto;
    font-size: 66px;
    color: #023d6a;
    text-align: left;
    padding-top: 56px;
    padding-bottom: 24px;
    padding-left: 191px;
  } */
}
</style>
