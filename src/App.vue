<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Calculator from "@/components/Calculator.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="Calculate With Vue"/>
    </div>
  </header>
  <main>
    <Calculator/>
  </main>
</template>