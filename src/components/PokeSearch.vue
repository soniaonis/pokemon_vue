<script setup>
import { ref } from 'vue';
import ApiPokemon from '../services/ApiPokemon.vue';

const pokemon = ref(null);
const searchQuery = ref('');

// Primera opción
async function search() {
    try {
        const reponse = await ApiPokemon.searchPokemon(searchQuery.value);
        pokemon.value = reponse.data;
    } catch (error) {
        pokemon.value = null;
    }
}
// Segunda opción (como el servicio de la api ya se proporciona desde Services/ApiPokemon.vue - se hace el import arriba - no debe de ser muy semántico volver a hacerlo aquí. De aquí tal vez reutilizaría el código de los valores que necesitamos para la búsqueda: nombre e id)
// async function search() {
//   const url = `https://pokeapi.co/api/v2/pokemon/${searchQuery.value}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     pokemon.value = {
//       name: data.name,
//       id: data.id
//     };
//   } catch (error) {
//     pokemon.value = null;
//   }
// }

// // Combinación de las dos opciones 
// async function search() {
//     try {
//         const reponse = await ApiPokemon.searchPokemon(searchQuery.value);
//         pokemon.value = reponse.data;
//         pokemon.value = {
//             name: data.name,
//             id: data.id
//         };
//         } catch (error) {
//             pokemon.value = null;
//     }
// }
</script>

<template>
<header>
    <div class="PokeSearch">
        <input type="text" v-model="searchQuery" placeholder="Search by name or ID">
        <button @click="search">Search</button>

    <div v-if="pokemon">
        <p>Name: {{ pokemon.name }}</p>
        <p>ID: {{ pokemon.id }}</p>
    </div>
    <div v-else>
        <p>Pokemon not found with this name or ID</p>
    </div>
    </div>   
</header>
</template>

<style scoped>
body {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #000080;
}

input, button {
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  background-color: #c6c9cc;
  color: #000080;
  border: none;
  border-radius: 10%;
  cursor: pointer;
}

p {
  margin-bottom: 10px;
}
</style>