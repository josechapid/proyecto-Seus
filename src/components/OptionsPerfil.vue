<template>
<div class="option_flex">
  <div class="logo_option">
    <div class="logo_background">
      <img :src="optionLogo" alt="">
    </div>
  </div>
  <div class="logo_name">
    <p>{{ name }}</p>
  </div>
</div>
</template>

<script setup>
defineProps(["optionLogo", "name"])
</script>

<style scoped>
.option_flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  /* background-color: brown; */
}
.logo_option{
  height: 160px;
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* background-color: aqua; */
}
.logo_background{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 112px;
  width: 112px;
  background-color: rgba(118, 29, 116, 1);
  border-radius: 100px;
  transition: background-color 3ms;
}
.logo_background:hover{
background-color: rgb(145, 93, 144);
}

.logo_background img{
  height: 67px;
  width: 67px;
}
.logo_background img:hover{
  cursor: pointer;
}

 .logo_name{
  width: 150px;
  height: 17px;
}
.logo_name p{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  margin: 0;
}


</style>
