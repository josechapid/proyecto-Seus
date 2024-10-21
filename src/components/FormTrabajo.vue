<template>
  <form @submit.prevent="guardarRegistro">
    <!-- Cargo -->
    <div class="campo_form_experiencia">
      <label for="cargo">Cargo:</label>
      <input
        type="text"
        id="cargo"
        placeholder="Ingresa el cargo"
        v-model="formExperiencia.cargo"
      />
    </div>

    <!-- Empresa -->
    <div class="campo_form_experiencia">
      <label for="empresa">Empresa:</label>
      <input
        type="text"
        id="empresa"
        placeholder="Ingresa la empresa"
        v-model="formExperiencia.empresa"
      />
    </div>

    <!-- Fecha de Inicio -->
    <div class="campo_form_experiencia">
      <label for="fechaInicio">Fecha de Inicio:</label>
      <div class="input_con_icono">
        <span class="icono-calendario">📅</span>
        <input
          type="date"
          id="fechaInicio"
          v-model="formExperiencia.fechaInicio"
        />
      </div>
    </div>

    <!-- Fecha de Finalización -->
    <div class="campo_form_experiencia">
      <label for="fechaFin">Fecha de Finalización:</label>
      <div class="input_con_icono">
        <span class="icono-calendario">📅</span>
        <input
          type="date"
          id="fechaFin"
          v-model="formExperiencia.fechaFin"
          :disabled="formExperiencia.trabajaActualmente"
        />
      </div>
    </div>

    <!-- Trabaja Aquí Actualmente -->
    <div class="campo_form_experiencia">
      <input
        type="checkbox"
        id="trabajaActualmente"
        v-model="formExperiencia.trabajaActualmente"
      />
      <label for="trabajaActualmente">¿Trabaja aquí actualmente?</label>
    </div>

    <!-- Logros -->
    <div class="campo_form_experiencia">
      <label for="logros">Menciona 3 Principales Logros:</label>
      <textarea
        id="logros"
        placeholder="Describe tus logros más destacados"
        v-model="formExperiencia.logros"
      ></textarea>
    </div>

    <!-- Botón Añadir Certificaciones -->
    <div class="campo_form_experiencia">
      <button type="button" class="btn añadir_certificaciones">
        📎 Añadir Certificaciones, Fotos o Premios
        <span class="opcional">(Opcional)</span>
      </button>
    </div>

    <!-- Botones -->
    <div class="botones">
      <button type="button" @click="añadirRegistro" class="btn añadir">
        ➕ Añadir
      </button>
      <button type="submit" class="btn guardar">
        📁 Guardar
      </button>
    </div>

    <!-- Registros Añadidos -->
    <div v-for="(registro, index) in registrosExperiencia" :key="index" class="registro">
      <p><strong>Cargo:</strong> {{ registro.cargo }}</p>
      <p><strong>Empresa:</strong> {{ registro.empresa }}</p>
      <p><strong>Fecha Inicio:</strong> {{ registro.fechaInicio }}</p>
      <p><strong>Fecha Fin:</strong> {{ registro.fechaFin || 'Trabaja Aquí Actualmente' }}</p>
      <p><strong>Logros:</strong> {{ registro.logros }}</p>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Objeto reactivo para manejar el formulario de experiencia
const formExperiencia = reactive({
  cargo: '',
  empresa: '',
  fechaInicio: '',
  fechaFin: '',
  trabajaActualmente: false,
  logros: ''
});

// Lista de registros de experiencia
const registrosExperiencia = ref([]);

// Función para añadir un registro de experiencia
const añadirRegistro = () => {
  if (formExperiencia.cargo && formExperiencia.empresa) {
    const registro = { ...formExperiencia };
    if (formExperiencia.trabajaActualmente) {
      registro.fechaFin = null; // Si trabaja actualmente, no tiene fecha de fin
    }
    registrosExperiencia.value.push(registro);
    limpiarFormulario(); // Limpia el formulario después de añadir
  } else {
    alert('Por favor completa los campos obligatorios.');
  }
};

// Función para guardar los registros
const guardarRegistro = () => {
  console.log('Registros guardados:', registrosExperiencia.value);
  alert('Registros guardados correctamente.');
};

// Función para limpiar el formulario
const limpiarFormulario = () => {
  formExperiencia.cargo = '';
  formExperiencia.empresa = '';
  formExperiencia.fechaInicio = '';
  formExperiencia.fechaFin = '';
  formExperiencia.trabajaActualmente = false;
  formExperiencia.logros = '';
};
</script>

<style scoped>
.campo_form_experiencia {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.input_con_icono {
  display: flex;
  align-items: center;
}

.icono-calendario {
  margin-right: 8px;
}

.btn {
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.añadir {
  background-color: #4CAF50;
  color: white;
}

.guardar {
  background-color: #2196F3;
  color: white;
}

.añadir_certificaciones {
  background-color: #FFC107;
  color: black;
}

.opcional {
  color: #FF5722;
  margin-left: 8px;
}

.botones {
  display: flex;
  gap: 8px;
}

.registro {
  margin-top: 16px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
