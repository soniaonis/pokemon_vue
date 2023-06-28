<script setup>
import CardPoke from '../components/CardPoke.vue';
const numberOfCards = 20;
</script>

<template>
  <main>
    
    <div class="pipi">
      <CardPoke v-for="index in numberOfCards" :key="index" />
    </div>
   
  </main>
</template>

<style scoped>

main {
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  font-family: "Lato", sans-serif;
  display: flex;
 
  align-items: center;
  justify-content: center;
  margin: 0;
}
 .pipi {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 }
</style>


