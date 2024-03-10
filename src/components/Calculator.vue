<template>
  <div id="calculator">
    <h1 id="result">{{ inputtedData.result }}</h1>
    <div id="numbers">
      <button v-for="num in 9" :key="num" @click="inputtedData.setVar(num)">{{ num }}</button>
      <button id="zero" @click="inputtedData.setVar(0)">0</button>
    </div>
    <div id="commands">
      <button id="summarize" @click="inputtedData.setCommand('+')">+</button>
      <button id="deduction" @click="inputtedData.setCommand('-')">-</button>
      <button id="multiplication" @click="inputtedData.setCommand('*')">*</button>
      <button id="division" @click="inputtedData.setCommand('/')">/</button>
      <button id="Equality" @click="inputtedData.calculate">=</button>
      <button id="clearBtn" @click="inputtedData.reset">C</button>
    </div>
  </div>
</template>

<script setup>
import InputtedData from "@/InputtedData.js";
import {ref} from 'vue';

const inputtedData = new InputtedData();
const result = ref(0);

inputtedData.result = result;
</script>

<style scoped>
#calculator {
  display: grid;
  grid-gap: 5px;
  margin: 0 auto;
  width: 300px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: white;
}

h1#result {
  grid-column: 1 / -1;
  text-align: right;
  margin: 0;
  padding: 0;
  color: black;
}

#numbers,
#commands {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}

button {
  cursor: pointer;
  background-color: #f2f2f2;
  border: none;
  padding: 10px;
  font-size: 1rem;
}

button:hover {
  background-color: #ddd;
}

button:active {
  background-color: #eee;
}
</style>
