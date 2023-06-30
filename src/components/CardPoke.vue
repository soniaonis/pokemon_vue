<script>
import { fetchData } from '../services/ApiPokemon.vue';

fetchData();
export default {
  data() {
    return {
      pokeImg: "",
      pokeNumber: "",
      pokeName: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const randomPokemonIndex = Math.floor(Math.random() * 1010) + 1;

        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + randomPokemonIndex
        );

        const pokemonData = await response.json();

        this.pokeImg = pokemonData.sprites.front_default;
        this.pokeNumber = `# ${pokemonData.id}`;
        this.pokeName = ` ${pokemonData.name}`;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="poke-container" id="poke-container">
    <div class="pokemon" @click="changePokemon">
      <div class="img-container">
        <img :src="pokeImg" alt="" id="poke-img" />
      </div>
      <div class="info">
        <span class="number" id="poke-munber">{{ pokeNumber }}</span>
        <h3 class="name" id="poke-name">{{ pokeName }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}

h1 {
  letter-spacing: 3px;
}

.poke-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.pokemon {
  background-color: rgb(222, 253, 224);
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
  text-transform: capitalize;
}

img {
  max-width: 100%;
}

</style>
