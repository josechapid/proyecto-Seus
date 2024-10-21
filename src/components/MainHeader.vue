<template>
    <header>
      <img :src="logoSeus" alt="imagen">
    </header>
</template>

<script>
import logoSeus from "../assets/img/header/logoSeus.svg"

export default {
  data(){
    return{
      logoSeus,
    }
  }
}
</script>

<style>
header{
  display: flex;
  justify-content: left;
  align-items: center;
  background: linear-gradient(112.76deg, #761D74 0.53%, #0DC6DE 100%);
  padding: 20px;
}

header img{
  margin-left: 40px;
}

</style>
