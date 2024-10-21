<template>
  <form @submit.prevent="submitForm" class="formulario-grid">
    <div class="campo_form">
      <label for="rangoSalarial">Rango salarial:</label>
      <select id="rangoSalarial" v-model="form.rangoSalarial">
        <option disabled value="">Selecciona</option>
        <option value="1000-2000">1000 - 2000 USD</option>
        <option value="2000-3000">2000 - 3000 USD</option>
        <option value="3000+">3000+ USD</option>
      </select>
    </div>

    <div class="campo_form">
      <label for="nivelProfesional">¿Cuál es tu nivel profesional?</label>
      <select id="nivelProfesional" v-model="form.nivelProfesional">
        <option disabled value="">Selecciona</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>
    </div>

    <div class="campo_form">
      <label for="nombre">Nombre completo:</label>
      <input type="text" id="nombre" placeholder="Escribe aquí..." v-model="form.nombre" />
    </div>

    <div class="campo_form">
      <label for="profesion">Profesión:</label>
      <input type="text" id="profesion" placeholder="Escribe aquí..." v-model="form.profesion" />
    </div>

    <div class="campo_form">
      <label for="especializacion">Especialización:</label>
      <input type="text" id="especializacion" placeholder="Escribe aquí..." v-model="form.especializacion" />
    </div>

    <div class="campo_form">
      <label for="documento">Número de documento:</label>
      <input type="text" id="documento" placeholder="Escribe aquí..." v-model="form.documento" />
    </div>

    <div class="campo_form">
      <label for="ciudad">Ciudad donde buscas trabajo:</label>
      <select id="ciudad" v-model="form.ciudad">
        <option disabled value="">Selecciona</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Medellín">Medellín</option>
        <option value="Cali">Cali</option>
      </select>
    </div>

    <div class="campo_form checkbox-container">
      <label for="traslado">¿Estás dispuesto a trasladarte?</label>
      <input type="checkbox" id="traslado" v-model="form.traslado" class="checkbox" />
    </div>

    <div class="campo_form">
      <label for="correo">Correo electrónico:</label>
      <input type="email" id="correo" placeholder="Escribe aquí..." v-model="form.correo" />
    </div>

    <div class="campo_form">
      <label for="celular">Número de celular:</label>
      <input type="tel" id="celular" placeholder="Escribe aquí..." v-model="form.celular" />
    </div>

    <div class="campo_form">
      <label for="linkedin">Perfil de LinkedIn:</label>
      <input type="url" id="linkedin" placeholder="Escribe aquí..." v-model="form.linkedin" />
    </div>

    <div class="campo_form">
      <label for="valorAgregado">¿Qué valor agregado ofreces? ¿Qué te diferencia de otras personas?</label>
      <textarea id="valorAgregado" v-model="form.valorAgregado" placeholder="Escríbelo aquí..." rows="3"></textarea>
    </div>

    <div class="campo_form">
      <label for="felicidad">¿Qué te hace feliz a nivel laboral?</label>
      <input type="text" id="felicidad" placeholder="Escribe aquí..." v-model="form.felicidad" />
    </div>

    <div class="campo_form">
      <label for="talento">¿Cuál es tu talento profesional?</label>
      <input type="text" id="talento" placeholder="Escribe aquí..." v-model="form.talento" />
    </div>

    <div class="campo_form">
      <label for="proyectos">¿Qué proyectos has implementado o qué ideas tienes para implementar?</label>
      <textarea id="proyectos" v-model="form.proyectos" placeholder="Escríbelo aquí..." rows="3"></textarea>
    </div>

    <button type="submit" class="submit-button">Enviar formulario</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  nombre: '',
  profesion: '',
  especializacion: '',
  documento: '',
  ciudad: '',
  traslado: false,
  correo: '',
  celular: '',
  linkedin: '',
  valorAgregado: '',
  felicidad: '',
  talento: '',
  proyectos: '',
  rangoSalarial: '',
  nivelProfesional: ''
});

const submitForm = () => {
  console.log('Formulario enviado:', form);
  // Aquí puedes manejar la lógica del envío, como una llamada a una API
};
</script>

<style scope>
.formulario-grid {
  display: grid;
  gap: 12px;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "rangoSalarial nivelProfesional"
    "profesion especializacion documento"
    "ciudad traslado correo"
    "celular linkedin valorAgregado"
    "felicidad talento proyectos";
}

.campo_form {
  display: flex;
  flex-direction: column;
}

.formulario-grid select,
.formulario-grid input {
  grid-column: span 1;
  padding: 8px;
  font-size: 16px;
}

.formulario-grid textarea {
  grid-column: span 3;
  padding: 8px;
  font-size: 16px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.submit-button {
  grid-column: span 3;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
