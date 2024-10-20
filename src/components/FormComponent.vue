<template>
  <form @submit.prevent="handleSubmit" class="formulario">
     <div class="campo">
       <input type="text" v-model="name" placeholder="Nombres" id="name" />
       <img :src="persona" alt="persona">

    </div>
    <div class="campo">
      <input type="text" v-model="lastName" placeholder="Apellidos" id="apellidos" />
      <img :src="persona" alt="persona">

    </div>
    <div class="campo">
      <input type="email" placeholder="Escribe un email" id="email" v-model="email"/>
      <img :src="ancor" alt="@">

    </div>
    <div class="campo documentos">
      <div class="campo tipo-documento" >
        <select v-model="documentType">
          <option value="" disabled>Tipo de documento</option>
          <option value="cc">CC</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
      </div>
      <div class="campo numero-documento">
        <input type="text" placeholder="Número de documento" id="documento" v-model="documentNumber" />
        <img :src="huella" alt="huella">
      </div>
    </div>
    <div class="campo">
      <input type="password" placeholder="Contraseña" id="password" v-model="password" />
      <img :src="candado" alt="candado">

    </div>
    <div class="campo">
      <input type="password" placeholder="Confirmar contraseña" id="repeatpassword" v-model="repeatPassword"/>
      <img :src="candado" alt="candado">
    </div>

    <div class="campo checkbox_container">
      <input type="checkbox"
      v-model="termsAccepted"
      id="terms"
      class="checkbox" />
      <label for="terms">Acepto Políticas de Tratamiento de Datos</label>
    </div>

    <div class="button_form">
      <button type="submit" class="button" :disabled="!isFormValid" @click="submitForm" >Registrarme</button>
    </div>
  </form>
</template>

<script setup>
import persona from "../assets/img/iconosForm/persona.svg"
import ancor from "../assets/img/iconosForm/ancor.svg"
import huella from "../assets/img/iconosForm/huella.svg"
import candado from "../assets/img/iconosForm/candado.svg"

import {ref, computed} from "vue"
import { useRouter } from "vue-router"

const router = useRouter()


const name = ref("")
const lastName = ref("")
const termsAccepted = ref(false)
const email= ref("")
const documentNumber= ref("")
const documentType = ref('')
const password = ref ("")
const repeatPassword=ref("")


const isFormValid = computed(() => {
  return  name.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    email.value.trim() !== '' &&
    documentNumber.value.trim() !== '' &&
    documentType.value !== '' &&
    password.value !== '' &&
    repeatPassword.value !== '' &&
    repeatPassword.value === password.value &&
    termsAccepted.value

});

const handleSubmit = () => {
  /* alert("formulario enviado correctamente") */
  console.log('Formulario enviado con éxito:', {
    name: name.value,
    lastName: lastName.value,
    email:email.value,
    documentNumber: documentNumber.value,
    documentType: documentType.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
    termsAccepted: termsAccepted.value,
  });


  name.value = '';
  lastName.value = '';
  email.value = '';
  documentNumber.value = '';
  documentType.value = '';
  password.value = '';
  repeatPassword.value = '';
  termsAccepted.value = false;

  router.push({name: "perfil" })
};



</script>

<style scoped>

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
  gap: 10px;
}
.tipo-documento,
.numero-documento {
  flex: 1;
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
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.formulario button{
  padding: 5px 20px;
  background-color: #761D74;
  color: #F8D2EA;
  border-radius: 20px;
  border: none;
  height: 37px;
  cursor: pointer;
}
button:hover{
  background-color: rgb(69, 62, 137);
}
button:disabled{
  background-color: #ccc;
  cursor: not-allowed
}
.error{
  color: red;
  font-size: 0.9em;
}
</style>
