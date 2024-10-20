<template>
<div v-if="message" :class="['alert', alertClass]">
  {{ message }}
</div>
</template>


<script setup>
  import {defineProps, computed} from "vue";

  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    alertType:{
      type: String,
      default: "success"
    }
  })

const alertClass = computed(() => {
  return props.alertType === 'success' ? 'alert-success' : 'alert-error';
});
</script>

<style>
.alert{
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  position: relative;
}

.alert-success{
  background-color: #d4edda;
  color: #155721;
  border: 1px solid #c3e6cb
}

.alert-error{
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
.close-button{
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  font-size: 1.5em;
  cursor: pointer;
  color: inherit;
}
</style>
