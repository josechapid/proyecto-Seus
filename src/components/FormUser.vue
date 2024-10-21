<template>
  <div class="form-container">
    <div class="form_content">

      <form @submit.prevent="handleSubmit" class="container_form">
        <div>
          <label for="rangoSalarial">Rango salarial desde:</label>
          <select type="text" id="rangoSalarial" v-model="rangoSalarial" placeholder="Ingresala aquí..." required >
            <option disabled value="">Selecciona</option>
            <option value="1000-2000">1000 - 2000 USD</option>
            <option value="2000-3000">2000 - 3000 USD</option>
            <option value="3000+">3000+ USD</option>
          </select>
        </div>
        <div>
          <label for="nivelAcademico">¿Cúal es tu nivel profesional?</label>
          <select type="text" id="nivelAcademico" v-model="nivelAcademico" placeholder="Ingresala aquí..." required>
            <option disabled value="">Selecciona</option>
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div>
          <label for="nombre">Nombre Completo:</label>
          <input type="text" id="nombre" v-model="nombre" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="profesion">Profesión:</label>
          <input type="text" id="profesion" v-model="profesion" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="especializacion">Expecialización:</label>
          <input type="text" id="especializacion" v-model="especializacion" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="numeroDocumento">Numero de documento:</label>
          <input type="text" id="numeroDocumento" v-model="numeroDocumento" placeholder="Ingresala aquí..." required />
        </div>
        <div class="divCiudad">
          <label  for="ciudad">Ciudad donde buscas empleo:</label>
          <select type="text" id="ciudad" v-model="ciudad" placeholder="Ingresala aquí..." class="inputCiudad" required>
            <option disabled value="">Selecciona</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </div>
        <div class="trabajo-actual">
            <label for="disponibilidad">¿Estas dispuesto a trasladarte?:</label>
            <input type="checkbox" id="disponibilidad" v-model="disponibilidad">
          </div>
        <div>
          <label for="email">Correo electronico:</label>
          <input type="text" id="email" v-model="email" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="celular">Numero de celular:</label>
          <input type="text" id="celular" v-model="celular" placeholder="Ingresala aquí..." required />
        </div>
        <div>
          <label for="linkedin">Linkedin:</label>
          <input type="text" id="linkedin" v-model="linkedin" placeholder="Ingresala aquí..." required />
        </div>
         <div class="textarea">
          <label for="logros">¿Qué valor agregado le ofreces a una empresa que te contrata? ¿Qué te diferencia de otras personas</label>
          <textarea name="logros" id="logros" placeholder="Escribelos aquí..." v-model="logros"></textarea>
        </div>
        <div >
          <label for="feliz">Qué te hace feliz a nivel laboral:</label>
          <input class="input_dosFilas" type="text" id="feliz" v-model="feliz" placeholder="Ingresala aquí..." required />
        </div>
        <div >
          <label for="talento">Cúal es tu talento profesional:</label>
          <input class="input_dosFilas" type="text" id="talento" v-model="talento" placeholder="Ingresala aquí..." required />
        </div>
         <div class="textarea">
          <label for="proyectos">Qué ideas, proyectos o actividades has implementado que quieras contar. / Si no tienes experiencia ¿qué ideas tienes para implementar?</label>
          <textarea name="logros" id="proyectos" placeholder="Escribelos aquí..." v-model="proyectos"></textarea>
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
    const rangoSalarial = ref('');
    const nivelAcademico = ref('');
    const nombre = ref('');
    const profesion = ref('');
    const especializacion = ref("");
    const numeroDocumento = ref("");
    const ciudad = ref("");
    const disponibilidad = ref(false);
    const email = ref("");
    const celular = ref("");
    const linkedin = ref("");
    const logros = ref("");
    const feliz = ref("");
    const talento = ref("");
    const proyectos = ref("");
    const dataUser = ref([])

    const handleAdd = () => {

      const dataUserComplet = {
        rangoSalarial: rangoSalarial.value,
        nivelAcademico: nivelAcademico.value,
        nombre: nombre.value,
        profesion: profesion.value,
        especializacion: especializacion.value,
        numeroDocumento: numeroDocumento.value,
        ciudad: ciudad.value,
        disponibilidad: disponibilidad.value,
        email: email.value,
        celular: email.value,
        linkedin: linkedin.value,
        logros: logros.value,
        feliz: feliz.value,
        talento: talento.value,
        proyectos: proyectos.value,
      };
      dataUser.value.push(dataUserComplet);
      resetForm();
    };

    const handleSubmit = () => {
      if (dataUser.value.length > 0) {
        console.log('Datos guardados:', dataUser.value);
        alert('Datos guardados correctamente.');
        dataUser.value = [];
      } else {
        alert('No hay datos para guardar.');
      }
    };


    const resetForm = () => {
      rangoSalarial.value = '';
      nivelAcademico.value = '';
      nombre.value = '';
      profesion.value = '';
      especializacion.value = '';
      numeroDocumento.value = '';
      ciudad.value = '';
      disponibilidad.value = (false);
      email.value = ("");
      celular.value = ("");
      linkedin.value = ("");
      logros.value = ("");
      feliz.value = ("");
      talento.value = ("");
      proyectos.value = ("");
    };

    return {
      rangoSalarial,
      nivelAcademico,
      nombre,
      profesion,
      especializacion,
      numeroDocumento,
      ciudad,
      disponibilidad,
      email,
      celular,
      linkedin,
      logros,
      feliz,
      talento,
      proyectos,
      handleAdd,
      handleSubmit,
    };
  },
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
justify-content: space-between;
}
h2 {
  text-align: left;
  color: rgba(2, 61, 106, 1);
}
.textarea{
  width: 100%;
}
textarea{
  width: 100%;
  height: 140px;
  background-color: rgba(237, 238, 241, 1);
  border-radius: 4px;
  border: none;
}

label {
  display: block;
  margin-bottom: 15px;
  color: rgba(2, 61, 106, 1);
}
select{
  height: 38px;
  width: 544px;
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
  background-color: rgba(237, 238, 241, 1);
}
.inputCiudad{
  width: 365px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input_dosFilas{
  width: 543px;
}
.divCiudad{
  margin-left: -10px;
}
.date-input{
  width: 160px;
}
</style>
