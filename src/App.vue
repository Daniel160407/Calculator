<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
      <div class="wrapper">
        <Title msg="Calculate With Vue"/>
      </div>
    </header>
    <Calculator/>
  </div>
</template>

<script setup>
import Title from './components/Title.vue';
import Calculator from "@/components/Calculator.vue";
import {defineProps} from 'vue';

defineProps(['msg']);
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: rgba(15, 15, 15, 0.1);
  justify-content: center;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  margin-bottom: 1rem;
}

.wrapper {
  text-align: center;
}

</style>
