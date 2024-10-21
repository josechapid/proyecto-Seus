<template>
  <div class="form-container">
    <div class="form_content">

    <form @submit.prevent="handleSubmit" class="container_form">
      <div class="textarea">
          <label for="fechaFinal">Datos complementarios <span>Opcional</span></label>
        <textarea name="logros" id="logros" placeholder="Añade informacin complementaria útil para reclutadores" v-model="logros"></textarea>
      </div>

      <div class="selectSubmit">
        <label  for="competenciaSeleccionada">Elige las 5 competencias que más te caracterizan</label>
        <select type="text" id="competenciaSeleccionada" v-model="competenciaSeleccionada" @change="handleAddCompetencia" required>
        <option value="" disabled>Selecciona</option>
        <option value="liderazgo">Liderazgo</option>
        <option value="comunicacion">Comunicación efectiva</option>
        <option value="trabajoEquipo">Trabajo en equipo</option>
        <option value="pensamientoCritico">Pensamiento crítico</option>
        <option value="resolucionProblemas">Resolución de problemas</option>
        <option value="adaptabilidad">Adaptabilidad</option>
        <option value="creatividad">Creatividad</option>
        <option value="gestionTiempo">Gestión del tiempo</option>
        </select>
          <p v-if="competencias.length >= 5" class="warning">
          Solo puedes elegir hasta 5 competencias.
        </p>
      </div>

      <div class="competencias-elegidas">
        <p v-if="competencias.length === 0">No has seleccionado ninguna competencia.</p>
        <ul>
          <li v-for="(comp, index) in competencias" :key="index" >
            {{ comp }}
            <button @click="removeCompetencia(index)" class="buttonCompetencia">❌</button>
          </li>
        </ul>
      </div>

      <div class="button_submitForm">
        <button type="submit" class="butUno" @click="handleAdd">Guardar información</button>
      </div>

    </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const logros = ref("");
const competenciaSeleccionada = ref("");
const competencias = ref([]);

const handleAddCompetencia = () => {
  if (
    competenciaSeleccionada.value &&
    !competencias.value.includes(competenciaSeleccionada.value) &&
    competencias.value.length < 5
  ) {
    competencias.value.push(competenciaSeleccionada.value);
  }
  competenciaSeleccionada.value = "";
};

const removeCompetencia = (index) => {
  competencias.value.splice(index, 1);
};

const handleSubmit = () => {
  console.log("Formulario enviado:", {
    logros: logros.value,
    competencias: competencias.value,
  });

  logros.value = "";
  competencias.value = [];
};
</script>

<style scoped>
.form-container {
background-color: rgb(255, 255, 255);
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
justify-content: space-around;
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
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
  color: rgba(2, 61, 106, 1);
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

select{
  height: 38px;
  width: 100%;
  background-color: rgba(237, 238, 241, 1);
  border: none;
  border-radius: 4px;
}

.selectSubmit{
  width: 100%;
}

textarea{
  background-color: rgba(237, 238, 241, 1);
  border: none;
  border-radius: 4px;
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

.button_submitForm{
width: 100%;
display: flex;
justify-content: center;
gap: 20px;
}

.butUno{
  background: linear-gradient(112.76deg, #761D74 0.53%, #0DC6DE 100%);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  border-radius: 28px;
  width: 251px;
  height: 41px;
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

.competencias-elegidas{
  display: flex;
  width: 50%;
  justify-content: center;
}

.buttonCompetencia{
  width: 50px;
  border-radius: 20px;
  cursor: pointer;
}

.competencias-elegidas ul {
  list-style-type: none;
  padding: 0;
}

.competencias-elegidas li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  border: 1px solid ;
  border-radius: 20px;
  padding: 20px;
}
</style>
