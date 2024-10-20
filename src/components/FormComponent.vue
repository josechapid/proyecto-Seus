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
    <div class="campo password">
      <input :type="isPasswordVisible ? 'text' : 'password'"  placeholder="Contraseña" id="password" v-model="password"  @input="checkPasswordStrength"/>
      <img :src="candado" alt="candado">
      <img
        :src="isPasswordVisible ? ojoCerrado : ojoAbierto"
        alt="toggle visibility"
        @click="togglePasswordVisibility"
        class="icono-ojo"
      />
    </div>
    <div class="password-strength">
      <svg width="600" height="10" class="password_svg" viewBox="0 0 544 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4H130.5" :stroke="colors[0]" stroke-width="2" stroke-linecap="square"/>
        <path d="M138.5 4H268" :stroke="colors[1]" stroke-width="2" stroke-linecap="square"/>
        <path d="M276 4H405.5" :stroke="colors[2]" stroke-width="2" stroke-linecap="square"/>
        <path d="M413.5 4H543" :stroke="colors[3]" stroke-width="2" stroke-linecap="square"/>
      </svg>
    </div>
    <div class="campo password">
      <input :type="isRepeatPasswordVisible ? 'text' : 'password'" placeholder="Confirmar contraseña" id="repeatpassword" v-model="repeatPassword"/>
      <img :src="candado" alt="candado"  class="icono-candado">
      <img
        :src="isRepeatPasswordVisible ? ojoCerrado : ojoAbierto"
        alt="toggle visibility"
        @click="toggleRepeatPasswordVisibility"
        class="icono-ojo"
      />
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
import ojoAbierto from "../assets/img/iconosForm/ojoAbierto.svg"
import ojoCerrado from "../assets/img/iconosForm/ojoCerrado.svg"

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
const colors = ref(["#d3d3d3", "#d3d3d3", "#d3d3d3", "#d3d3d3"])


const isPasswordVisible = ref(false);
const isRepeatPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const toggleRepeatPasswordVisibility = () => {
  isRepeatPasswordVisible.value = !isRepeatPasswordVisible.value;
};
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
      colors.value = ["#FF3B30", "#d3d3d3", "#d3d3d3", "#d3d3d3"] // Muy débil
      break
    case 2:
      colors.value = ["#FF9F0A", "#FF9F0A", "#d3d3d3", "#d3d3d3"] // Débil
      break
    case 3:
      colors.value = ["#FF9F0A", "#FF9F0A", "#FF9F0A", "#d3d3d3"] // Medio
      break
    case 4:
    case 5:
      colors.value = ["#35C95A", "#35C95A", "#35C95A", "#35C95A"] // Fuerte
      break
  }
}

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

.formulario{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 12px 12px 12px;
  margin-bottom: 90px;
}

@media (min-width: 800px) {
  .formulario{
    padding: 10px 50px;

  }
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
.campo .icono-ojo{
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: 550px;
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

.password-strength{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  background-color: #eceaec;
  color: black;
  border: 1px solid black;
}
button:disabled{
  background-color: #ccc;
  cursor: not-allowed
}


</style>
