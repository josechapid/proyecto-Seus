<template>
  <div class="form_container_all">
  <form @submit.prevent="handleSubmit" class="formulario">
    <div class="campo">
      <input type="text" v-model="name" placeholder="Nombres" id="name" @input="validateName"  />
      <img :src="persona" alt="persona" class="leftIcon">
      <p class="error-message" v-if="nameError">{{ nameError }}</p>
    </div>

    <div class="campo">
      <input type="text" v-model="lastName" placeholder="Apellidos" id="apellidos" @input="validateLastName"/>
      <img :src="persona" alt="persona" class="leftIcon">
      <p class="error-message" v-if="lastNameError">{{ lastNameError }}</p>
    </div>

    <div class="campo">
      <input type="email" placeholder="Escribe un email" id="email" v-model="email" @input="validateEmail"/>
      <img :src="ancor" alt="@" class="leftIcon">
      <p class="error-message" v-if="emailError">{{ emailError }}</p>
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
        <input type="text" placeholder="Número de documento" id="documento" v-model="documentNumber" @input="validateDocumentNumber" />
        <img :src="huella" alt="huella" class="leftIcon">
        <p class="error-message" v-if="documentError">{{ documentError }}</p>
      </div>

    </div>
    <div class="campo password">
      <input :type="isPasswordVisible ? 'text' : 'password'"  placeholder="Contraseña" id="password" v-model="password"  @input="checkPasswordStrength"/>
      <img :src="candado" alt="candado" class="leftIcon">
      <img
        :src="ojoCerrado "
        class="rightIcon"
      />
      <!-- <img
        :src="isPasswordVisible ? ojoCerrado : ojoAbierto"
        alt="toggle visibility"
        @click="togglePasswordVisibility"
        class="rightIcon"
      /> -->
      <div class="password-strength">
        <svg class="password_svg" viewBox="0 0 544 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4H130.5" :stroke="colors[0]" stroke-width="2" stroke-linecap="square"/>
          <path d="M138.5 4H268" :stroke="colors[1]" stroke-width="2" stroke-linecap="square"/>
          <path d="M276 4H405.5" :stroke="colors[2]" stroke-width="2" stroke-linecap="square"/>
          <path d="M413.5 4H543" :stroke="colors[3]" stroke-width="2" stroke-linecap="square"/>
        </svg>
      </div>
    </div>
    <div class="campo password">
      <input :type="isRepeatPasswordVisible ? 'text' : 'password'" placeholder="Confirmar contraseña" id="repeatpassword" v-model="repeatPassword"/>
      <img :src="candado" alt="candado"  class="leftIcon">

       <img
        :src="ojoCerrado "
        class="rightIcon"
      />
       <!-- <img
        :src="isRepeatPasswordVisible ? ojoCerrado : ojoAbierto"
        alt="toggle visibility"
        @click="toggleRepeatPasswordVisibility"
        class="rightIcon"
      /> -->
    </div>
    <div class="check_container">
      <div class="campo checkbox_container">
        <input type="checkbox" v-model="termsAccepted" id="terms" class="checkbox" />
        <label for="terms">Acepto <span>Políticas de Tratamiento de Datos</span></label>
      </div>
    </div>

    <div class="button_form">
      <button type="submit" class="button" >Registrarme</button>
      <!-- <button type="submit" class="button" :disabled="!isFormValid" @click="submitForm" >Registrarme</button> -->
    </div>
  </form>
  </div>
</template>

<script setup>
import persona from "../assets/img/iconosForm/persona.svg"
import ancor from "../assets/img/iconosForm/ancor.svg"
import huella from "../assets/img/iconosForm/huella.svg"
import candado from "../assets/img/iconosForm/candado.svg"
/* import ojoAbierto from "../assets/img/iconosForm/ojoAbierto.svg" */
import ojoCerrado from "../assets/img/iconosForm/ojoCerrado.svg"

import {ref} from "vue"
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
const colors = ref(["#d3d3d3", "#d3d3d3", "#d3d3d3", "#d3d3d3"])

const nameError = ref("");
const lastNameError = ref("")
const emailError = ref("")
const documentError = ref("")

function validateName() {
  nameError.value = name.value.length >= 3
    ? ""
    : "El nombre debe tener al menos 3 caracteres."
}
function validateLastName() {
  lastNameError.value = lastName.value.length >= 3
    ? ""
    : "El Apellido debe tener al menos 3 caracteres."
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = emailPattern.test(email.value)
    ? ""
    : "Por favor ingresa un email válido."
}
function validateDocumentNumber() {
  if (!/^\d*$/.test(documentNumber.value)) {
    documentError.value = "El número de documento solo debe contener números.";
  } else {
    documentError.value = "";
  }
}

const isPasswordVisible = ref(false);
const isRepeatPasswordVisible = ref(false);

/* const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
}; */

/* const toggleRepeatPasswordVisibility = () => {
  isRepeatPasswordVisible.value = !isRepeatPasswordVisible.value;
}; */
function checkPasswordStrength() {
  const value = password.value
  let score = 0


  if (value.length >= 8) score++
  if (/[A-Z]/.test(value)) score++
  if (/[a-z]/.test(value)) score++
  if (/[0-9]/.test(value)) score++
  if (/[^A-Za-z0-9]/.test(value)) score++


  switch (score) {
    case 0:
    case 1:
      colors.value = ["#FF3B30", "#d3d3d3", "#d3d3d3", "#d3d3d3"]
      break
    case 2:
      colors.value = ["#FF9F0A", "#FF9F0A", "#d3d3d3", "#d3d3d3"]
      break
    case 3:
      colors.value = ["#FF9F0A", "#FF9F0A", "#FF9F0A", "#d3d3d3"]
      break
    case 4:
    case 5:
      colors.value = ["#35C95A", "#35C95A", "#35C95A", "#35C95A"]
      break
  }
}

/* const isFormValid = computed(() => {
  return  name.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    email.value.trim() !== '' &&
    documentNumber.value.trim() !== '' &&
    documentType.value !== '' &&
    password.value !== '' &&
    repeatPassword.value !== '' &&
    repeatPassword.value === password.value &&
    termsAccepted.value

}); */

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

.form_container_all{
  display: flex;
  justify-content: center;
  width: 100%;

}
.formulario{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 544px;
  width: 100%;
  height: auto;
  gap: 24px;
  margin: 0px;
  padding: 20px;
}


.campo{
  width: 100%;
  height: auto;
  position: relative;
}

.campo .leftIcon{
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}
.campo .rightIcon{
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.campo .icono-ojo{
  position: absolute;
  right: -10px;
  top: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
}

.campo select,
.campo input{
  background-color: #f2f2f2;
  border: none;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  flex: 1;
  font-size: 16px;
}
select{
  height: 40px;
}
.campo input{
  padding: 10px 10px 10px 44px;
}
.label{
  color: #761D74;
}

.password-strength{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8px;
}
.password_svg{
height: 8px;
}
.documentos {
  display: flex;
  gap: 10px;
}

.tipo-documento,
.numero-documento {
 flex: 1;
}
.check_container{
  display: flex;
  width: 100%;
  justify-content: left;
}
.checkbox_container{
  display: flex;
  justify-content: start;
  align-items: center;
  width: 332px;
  gap: 18px;
  white-space: nowrap;
  font-size: 14px;
}
.checkbox_container span{
  color:#4A0E54;
  font-weight: 600;
  font-size: 14px;
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
.button_form button {
  padding: 10px 20px;
  background-color: #761D74;
  color: #F8D2EA;
  border-radius: 28px;
  border: none;
  cursor: pointer;
  width: 100%;
}
.formulario button{
  padding: 5px 20px;
  background-color: #761D74;
  color: #F8D2EA;
  border-radius: 28px;
  border: none;
  height: 37px;
  width: 179px;
  cursor: pointer;
}

button:hover{
  background-color: #eceaec;
  color: black;
  border: 1px solid black;
}

button:disabled{
  background-color: #ccc;
  cursor: not-allowed
}

.error-message {
  color: #ff3b30;
  font-size: 12px;
  margin-top: 4px;
}
@media (max-width: 768px) {
  .formulario {
    margin: 20px; /* Reduce márgenes en pantallas pequeñas */
  }
  .checkbox_container {
    flex-direction: column; /* Cambia la dirección a columna si hay poco espacio */
    align-items: flex-start; /* Alinear a la izquierda en lugar de centrar */
  }
}

</style>
