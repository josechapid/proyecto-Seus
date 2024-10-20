<template>
  <form @submit.prevent="handleSubmit" class="formulario">
     <div class="campo">
       <input type="text" placeholder="Nombres" id="name" />
       <img :src="persona" alt="">
    </div>
    <div class="campo">
      <input type="text" placeholder="Apellidos" id="apellidos" />
      <img :src="persona" alt="">
    </div>
    <div class="campo">
      <input type="email" placeholder="Escribe un email" id="email" />
      <img :src="ancor" alt="">
    </div>
    <div class="campo documentos">
      <div class="campo tipo-documento">
        <select>
          <option value="" disabled selected>Tipo de documento</option>
          <option value="cc">CC</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
      </div>
      <div class="campo numero-documento">
        <input type="text" placeholder="Número de documento" id="documento" />
        <img :src="huella" alt="">
      </div>
    </div>
    <div class="campo">
      <input type="password" placeholder="Contraseña" id="password" />
      <img :src="candado" alt="">
    </div>
    <div class="campo">
      <input type="password" placeholder="Confirmar contraseña" id="repeatpassword" />
      <img :src="candado" alt="">
    </div>

    <div class="campo checkbox_container">
      <input type="checkbox" id="data-policy" class="checkbox" />
      <label for="data-policy">Acepto Políticas de Tratamiento de Datos</label>
    </div>

    <div class="button_form">
      <button type="submit" class="button">Registrarme</button>
    </div>
  </form>
</template>

<script setup>
import persona from "../assets/img/iconosForm/persona.svg"
import ancor from "../assets/img/iconosForm/ancor.svg"
import huella from "../assets/img/iconosForm/huella.svg"
import candado from "../assets/img/iconosForm/candado.svg"

function handleSubmit() {
  console.log("Formulario enviado");
}
</script>

<style scoped>
/* Estilos del formulario */
.formulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 12px 72px;
}
.campo{
  width: 100%;
  position: relative;

}
.campo img{
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.campo select,
.campo input{
  background-color: #E6E6E6;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  flex: 1;
  font-size: 16px;
}
.campo input{
  padding: 10px 10px 10px 40px;
}
.documentos {
  display: flex;
  gap: 10px; /* Espaciado entre los elementos */
}
.tipo-documento,
.numero-documento {
  flex: 1; /* Cada elemento ocupará la misma cantidad de espacio */
}
.checkbox_container{
  display: grid;
  grid-template-columns: 1fr 10fr;
  align-items: center;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin: 0;
  accent-color: #E6E6E6;
  cursor: pointer;
}
.button_form {
  display: flex; /* Asegura que el contenedor sea un flex container */
  justify-content: flex-start; /* Alinea el contenido al inicio (izquierda) */
  width: 100%; /* Asegúrate de que el contenedor ocupe todo el ancho */
}
.formulario button{
  padding: 5px 20px;
  background-color: #761D74;
  color: #F8D2EA;
  border-radius: 20px;
  border: none;
}
</style>
