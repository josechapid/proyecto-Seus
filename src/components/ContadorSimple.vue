<template>
  <p>{{ contador }}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
<header>
  Este es el encabezado
</header>
<section>
  esta es la seccion central
</section>
<section>
  esta es la seccion de imagenes de empresas
</section>
<footer>
  Este es el footer
</footer>
</template>


<script setup>
import {ref} from "vue";

const contador = ref(0)
const incrementar =()=>{
  contador.value++;
}

const decrementar = ()=>{
  contador.value--;
}
</script>

<style scoped>

</style>
