<script setup>
import { fetchData } from "../services/apiPokemon.vue";
fetchData();
import { ref, onMounted } from "vue";
const pokemon = ref({
  imageUrl: "",
  id: "",
  name: "",
  type: "",
  hp: "",
  attack: "",
  defence: "",
  speed: "",
});
onMounted(async () => {
  const data = await fetchData();
  pokemon.value = {
    imageUrl: data.imageUrl,
    id: data.id,
    name: data.name,
    type: data.type,
    hp: data.hp,
    attack: data.attack,
    defence: data.defence,
    speed: data.speed,
  };
});
</script>
<template>
  <div class="poke-container" id="poke-container">
    <div class="poke-details">
      <img id="poke-img" :src="pokemon.imageUrl" alt="Pokemon Image" />
      <h2 id="poke-id">ID: {{ pokemon.id }}</h2>
      <h2 id="poke-name">Name: {{ pokemon.name }}</h2>
    </div>
    <div class="poke-stats">
      <h2 id="poke-type">Type: {{ pokemon.type }}</h2>
      <h3 id="poke-hp">HP: {{ pokemon.hp }}</h3>
      <h3 id="poke-attack">Attack: {{ pokemon.attack }}</h3>
      <h3 id="poke-defence">Defence: {{ pokemon.defence }}</h3>
      <h3 id="poke-speed">Speed: {{ pokemon.speed }}</h3>
    </div>
  </div>
</template>
<style scoped>
.poke-container {
  display: flex;
  background-color: rgb(222,253,224);
  padding: 20px;
  border-radius: 20px;
}
.poke-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#poke-img {
  width: 200px;
  height: 200px;
}
.poke-stats {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
.h2 {
  font: bold;
  color: rgba(0, 0, 128, 1);
}
.h3 {
  font: bold;
  color: rgba(0, 0, 128, 1);
  margin-bottom: 10px;
}
</style>
