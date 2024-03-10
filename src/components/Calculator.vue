<script setup>
import InputtedData from "@/InputtedData.js";

const inputtedData = new InputtedData();
</script>

<template>
  <div>
    <h1 id="result"></h1>
    <div id="numbers">
      <button id="I" @click="inputtedData.setVar(1)">1</button>
      <button id="II" @click="inputtedData.setVar(2)">2</button>
      <button id="III" @click="inputtedData.setVar(3)">3</button>
      <button id="IV" @click="inputtedData.setVar(4)">4</button>
      <button id="V" @click="inputtedData.setVar(5)">5</button>
      <button id="VI" @click="inputtedData.setVar(6)">6</button>
      <button id="VII" @click="inputtedData.setVar(7)">7</button>
      <button id="VIII" @click="inputtedData.setVar(8)">8</button>
      <button id="IX" @click="inputtedData.setVar(9)">9</button>
      <button id="zero" @click="inputtedData.setVar(0)">0</button>
    </div>
    <div id="commands">
      <button id="summarize" @click="inputtedData.setCommand('+')">+</button>
      <button id="deduction" @click="inputtedData.setCommand('-')">-</button>
      <button id="multiplication" @click="inputtedData.setCommand('*')">*</button>
      <button id="division" @click="inputtedData.setCommand('/')">/</button>
      <button id="Equality" @click="inputtedData.calculate()">=</button>
    </div>
    <div>
      <button id="clearBtn" @click="inputtedData.reset()">C</button>
    </div>
  </div>
</template>

<style scoped>

</style>