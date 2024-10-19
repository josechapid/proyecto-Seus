<template>
  <Main>
    <div class="main_container">
      <div class="titulo">
        <p>Personas</p>
      </div>

      <div class="grid">

        <div class="formulario_container">
          <div class="formulario_info">

            <div class="titulo_form">
              <p>Empieza tu carrera <br> hoy mismo</p>
            </div>
            <form action="" class="formulario">
              <div class="campo">
                <img src="" alt="">
                <input type="text" placeholder="Nombres" id="name">
              </div>
              <div class="campo">
                <img src="" alt="">
                <input type="text" placeholder="Apellidos" id="apellidos">
              </div>
              <div class="campo">
                <img src="" alt="">
                <input type="email" placeholder="Escribe un email" id="email">
              </div>
              <div class="campo">
                <select>
                  <option value="" disabled selected>Tipo de documento</option>
                  <option value="cc">CC</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>
              </div>
              <div class="campo">
                <img src="" alt="">
                <input type="text" placeholder="Número de documento" id="documento">
              </div>
              <div class="campo">
                <img src="" alt="">
                <input type="password" placeholder="Contraseña" id="password">
              </div>
              <div class="campo">
                <img src="" alt="">
                <input type="password" placeholder="Confirmar contraseña" id="repeatpassword">
              </div>
              <div class="campo">
                <input type="checkbox" id="data-policy" class="checkbox">
                <label for="data-policy" class="checkbox-label">Acepto Políticas de Tratamiento de Datos</label>
              </div>
              <button type="submit">Registrarme</button>
            </form>
          </div>
        </div>
        <div class="cards">
          <div class="cards_titulo">
            <p>Mercado de oportunidades</p>
          </div>
          <div class="cards_grid">
            <div class="cards_info">
              <div class="card">
                <div class="logo_card">
                  <div class="logo_card-background">
                    <img :src="cardLogo" alt="">
                  </div>
                </div>
                <div class="card_image">
                  <img :src="cardImage" alt="">
                </div>
                <div class="card_info">
                  <p>Líder de ventas<br>(Canal natural)</p>
                  <p>Buscamos lider comercial apasionado(a) por el bienestar y la alimentación saludable, empática y con orientación  al logro.</p>
                </div>
                <div class="card_button">
                  <button class="card-button-firts">Leer más</button>
                  <button class="card-button-second">Aplicar a oferta</button>
                </div>
              </div>
              <div class="botones_opinion">
                <button class="botones_opinion-first">Preguntar</button>
                <button class="botones_opinion-second">Recomendar</button>
              </div>
            </div>
            <div class="cards_info">
              <div class="card">
                <div class="logo_card">
                  <div class="logo_card-background">
                    <img :src="cardLogo" alt="">
                  </div>
                </div>
                <div class="card_image">
                  <img :src="cardImage" alt="">
                </div>
                <div class="card_info">
                  <p>Líder de ventas<br>(Canal natural)</p>
                  <p>Buscamos lider comercial apasionado(a) por el bienestar y la alimentación saludable, empática y con orientación  al logro.</p>
                </div>
                <div class="card_button">
                  <button class="card-button-firts">Leer más</button>
                  <button class="card-button-second">Aplicar a oferta</button>
                </div>
              </div>
              <div class="botones_opinion">
                <button class="botones_opinion-first">Preguntar</button>
                <button class="botones_opinion-second">Recomendar</button>
              </div>
            </div>
          </div>
          <div class="iconos">
            <div class="icono">
              <img :src="busquedaIcon" alt="lupa">
            </div>
            <div class="icono">
              <img :src="playIcon" alt="">
            </div>
            <div class="icono">
              <img :src="empresaIcon" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script>
import cardImage from "../assets/img/cards/card_img.svg"
import cardLogo from "../assets/img/cards/card_logo.svg"
import busquedaIcon from "../assets/img/iconsMain/busquedaIcon.svg"
import empresaIcon from "../assets/img/iconsMain/empresaIcon.svg"
import playIcon from "../assets/img/iconsMain/playIcon.svg"

export default{
  data(){
    return{
      cardImage,
      cardLogo,
      busquedaIcon,
      empresaIcon,
      playIcon,
    }
  }
}
</script>

<style>

/* titulo principal */
.titulo{
  text-transform: uppercase;
  font-size: 66px;
  text-align: left;
  margin: 0 auto 0 72px;
  color: #023D6A;
  font-weight: 700;
}
.titulo p{
  margin: 56px 0 24px 0;
}

/* grid para dividir formulario y cards */

.grid{
  display: flex;
  flex-direction: column;
}
@media (min-width: 1200px) {
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }


}

/* formulario */
.formulario_container{
  border-top: solid #601565 24px;
}

.formulario_info{
  margin:70px 72px;
}

.titulo_form{
  text-transform:uppercase;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #023D6A;
  font-size: 38px;
  font-weight: 600;

}

@media (min-width: 768px) {
.formulario{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  /* grid-template-rows: auto auto 40px; */
}
.campo:nth-child(1),
.campo:nth-child(2),
.campo:nth-child(3),
.campo:nth-child(6),
.campo:nth-child(7),
.campo:nth-child(8){
  grid-column: 1 / 3;
}
}


.formulario{
  width: 100%;
}

.formulario input,
.formulario select{
  background-color: #E6E6E6;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.campo {
margin-top: 15px;
}
.checkbox {
  width: 20px;
  height: 20px;
  margin: 0;
  accent-color: #E6E6E6;
  cursor: pointer;
}

.formulario button{
  padding: 5px 20px;
  background-color: #761D74;
  color: #F8D2EA;
  border-radius: 20px;
  border: none;

}

.cards{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #A8A8A84D;
  border-radius: 20px;
  padding: 10px 20px 5px 20px;
  position: relative;
  top:-50px;
  height: 980px;
  width: 660px;
}
.cards_titulo {
 font-size: 24px;
 color: #023D6A;
 text-align: left;
 width: 100%;
}
.cards_grid{
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 80px;
  gap: 31px;
  justify-content: center;
  align-items: center;
}
.cards_info{
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 268px;
  height:431px;
  margin-top: 2rem;
  border: 1px solid #beb9b9;
  border-radius: 10px;
}

.card{
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
  /* box-shadow: 0px 4px 6px 0px #00000026; */
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
.card_info{
  padding: 5px 20px;
}
.card_button{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
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
 background-color: white;
 color:#06759F ;
}
.card-button-second{
  border: none;
  background-color: #0DC6DE;
  color: #CDFDF3;
}
.botones_opinion{
  display: flex;
  justify-content:space-between;
  height: 31px;
  margin-top: 20px;
  align-items: center;
}
.botones_opinion-first,
.botones_opinion-second{
  border-style:dashed;
  border-radius: 6px;
  border-color: #045480;
  width: 126px;
  height: 31px;
}

.iconos{
  display: flex;
  justify-content: center;
  gap: 60px;
  width: 100%;
  border-top: 1px solid #023D6A;
}
.icono{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 128px;
  width: 128px;
  margin-top: 50px;
  background-color: #D9D9D9;
  border-radius: 50%;
}



</style>
