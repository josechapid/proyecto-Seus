<template>
  <div class="form-container">
    <div class="form_content">
      <h2>Formación académica</h2>
      <form @submit.prevent="handleSubmit" class="container_form">
        <div>
          <label for="tituloAcademico">Titulo academico:</label>
          <input type="text" id="tituloAcademico" v-model="tituloAcademico" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="institucion">Institución:</label>
          <input type="text" id="institucion" v-model="institucion" placeholder="Ingresala aquí..." required />
        </div>
        <div >
          <label for="fechaInicio" class="date-icon">Fecha de inicio:</label>
          <input type="date" id="fechaInicio" class="date-input" v-model="fechaInicio">
        </div>
        <div>
          <label for="fechaFinal">Fecha de Terminación:</label>
          <input type="date" id="fechaFinal" class="date-input" v-model="fechaFinal">
        </div>

        <div v-if="formaciones.length" class="formaciones-container">
          <h3>Formaciones Añadidas:</h3>
          <div v-for="(formacion, index) in formaciones" :key="index" class="card-Academia">
            <h4>{{ formacion.tituloAcademico }}</h4>
            <p>Institución: {{ formacion.institucion }}</p>
            <p>Fecha de Inicio: {{ formacion.fechaInicio }}</p>
            <p>Fecha de Terminación: {{ formacion.fechaTerminacion }}</p>
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

<script>
import { ref } from 'vue';

export default {
  name: 'FormacionAcademica',
  setup() {
    const tituloAcademico = ref('');
    const institucion = ref('');
    const fechaInicio = ref('');
    const fechaFinal = ref('');
    const formaciones = ref([]);

    const handleAdd = () => {

    const nuevaFormacion = {
      tituloAcademico: tituloAcademico.value,
      institucion: institucion.value,
      fechaInicio: fechaInicio.value,
      fechaTerminacion: fechaFinal.value,
    };
    formaciones.value.push(nuevaFormacion);
    resetForm();
  };

  const handleSubmit = () => {
    if (formaciones.value.length > 0) {
      console.log('Datos guardados:', formaciones.value);
      alert('Datos guardados correctamente.');
      formaciones.value = [];
    } else {
      alert('No hay datos para guardar.');
    }
  };

  const resetForm = () => {
    tituloAcademico.value = '';
    institucion.value = '';
    fechaInicio.value = '';
    fechaFinal.value = '';
  };

  return {
    tituloAcademico,
    institucion,
    fechaInicio,
    fechaFinal,
    formaciones,
    handleAdd,
    handleSubmit,
    };
  },
};
</script>

<style scoped>
.form-container {
background-color: rgba(198, 203, 210, 1);
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
h2 {
  text-align: left;
  color: rgba(2, 61, 106, 1);
}

label {
  display: block;
  margin-bottom: 15px;
  color: rgba(2, 61, 106, 1);
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

.card-Academia {
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
}

.formaciones-container {
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
