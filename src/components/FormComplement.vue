<template>
  <div class="form-container">
    <div class="form_content">
      <h2>Experiencia laboral</h2>
      <form @submit.prevent="handleSubmit" class="container_form">
        <div>
          <label for="cargo">Cargo:</label>
          <input type="text" id="cargo" v-model="cargo" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="empresa">Empresa:</label>
          <input type="text" id="empresa" v-model="empresa" placeholder="Ingresala aquí..." required />
        </div>
        <div >
          <label for="fechaInicio" class="date-icon">Fecha de inicio:</label>
          <input type="date" id="fechaInicio" class="date-input" v-model="fechaInicio">
        </div>
        <div>
          <label for="fechaFinal">Fecha de Terminación:</label>
          <input type="date" id="fechaFinal" class="date-input" v-model="fechaFinal">
        </div>
        <div class="textarea">
          <label for="logros">Menciona 3 principales logros</label>
          <textarea name="logros" id="logros" placeholder="Escribelos aquí..." v-model="logros"></textarea>
        </div>

        <div class="cargar-archivos">
          <div class="documents">
            <div class="document_archivos">
              <img :src="clip" alt="clip">
              <p>Añadir certificación, fotos o premios </p>
              <span>Opcional</span>
            </div>
            <p>Si tienes fotos de tu experiencia laboral compártela con nosotros (fotos con el equipo de trabajo, en eventos realizados, dando una charla, recibiendo un premio) recuerda que el mal uso de este espacio puede generar que tu perfil no sea aprobado. Si no tienes fotos que generen valor, deja este espacio en blanco.</p>
          </div>
          <div class="trabajo-actual">
            <p>Trabaja actualmente aqui</p>
            <input type="checkbox" id="trabajoActual" v-model="trabajoActual">
          </div>
        </div>

        <div v-if="trabajos.length" class="trabajos-container">
          <h3>Trabajos Añadidos:</h3>
          <div v-for="(trabajo, index) in trabajos" :key="index" class="card-trabajo">
            <h4>{{ trabajo.cargo }}</h4>
            <p>Empresa:<br> {{ trabajo.empresa }}</p>
            <p>Fecha de Inicio: <br> {{ trabajo.fechaInicio }}</p>
            <p>Fecha de Terminación: <br> {{ trabajo.fechaFinal }}</p>
            <p>Logros: <br> {{ trabajo.logros }}</p>
            <p>Trabajo actual: <br> {{ trabajo.trabajoActual ? "si" : "no" }}</p>
          </div>
        </div>
        <div class="buttons">
          <button type="submit" class="butUno" @click="handleAdd">Guardar</button>
          <button type="submit" class="butDos">Añadir</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import clip from '../assets/img/icons/clip.svg';

const cargo = ref('');
const empresa = ref('');
const logros = ref('');
const fechaInicio = ref('');
const fechaFinal = ref('');
const trabajos = ref([]);
const trabajoActual = ref(false);

const handleAdd = () => {
  const nuevaExperienciaWork = {
    cargo: cargo.value,
    empresa: empresa.value,
    logros: logros.value,
    fechaInicio: fechaInicio.value,
    fechaFinal: fechaFinal.value,
    trabajoActual: trabajoActual.value,
  };
  trabajos.value.push(nuevaExperienciaWork);
  resetForm();
};

const handleSubmit = () => {
  if (trabajos.value.length > 0) {
    console.log('Datos guardados:', trabajos.value);
    alert('Datos guardados correctamente.');
    trabajos.value = [];
  } else {
    alert('No hay datos para guardar.');
  }
};

const resetForm = () => {
  cargo.value = '';
  empresa.value = '';
  logros.value = '';
  fechaInicio.value = '';
  fechaFinal.value = '';
  trabajoActual.value = false;
};
</script>

<style scoped>
.form-container {
background-color: rgba(2, 61, 106, 1);
margin-bottom: 0;
}

.form_content{
  width: 1200px;
  height: auto;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
}

.container_form{
display: flex;
flex-wrap: wrap;
gap: 32px;
justify-content: space-between;
}

h2,h3 {
  text-align: left;
  color: rgb(255, 255, 255);
}

.textarea{
  width: 100%;
}

textarea{
  width: 100%;
  height: 140px;
}

label {
  display: block;
  margin-bottom: 15px;
  color: rgb(255, 255, 255);
}

.cargar-archivos{
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
}

.documents{
  display: flex;
  flex-direction: column;
  width: 830px;
  height: 24px;
}

.documents p{
  color: white;
  font-weight: 400;
  line-height: 12px;
  font-size: 10px;
}

.document_archivos{
  display: flex;
  gap: 10px;
}

.document_archivos span{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  width: 75px;
  background-color: rgba(6, 117, 159, 0.4);
  border-radius: 25px;
  padding: 4px 10px;
  color: white;
}

.trabajo-actual{
  display: flex;
  flex-direction: column;
  width: 182px;
}

.trabajo-actual  p{
  color: white;
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
}

input {
  width: 352px;
  height: 20px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.date-input{
  width: 160px;
}

.buttons{
width: 100%;
display: flex;
justify-content: right;
gap: 20px;
}

.butUno{
  background-color: rgba(13, 198, 222, 1);
  color: black;
  border-radius: 28px;
}

.butDos{
  color: black;
  border-radius: 28px;
}

button {
  width: 160px;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #b3b3b3;
}

.card-trabajo {
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  gap: 10px;
  background-color: #f9f9f9;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.trabajos-container {
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
