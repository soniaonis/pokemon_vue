<script setup>
import { fetchData } from '../services/ApiPokemon.vue';

fetchData();

</script>

<template>
    <header>
        <div id="RightSide">
            <h1>POKEDEX</h1>
            <img src="src\assets\pokeball 1.png" alt="Pokeball">
        </div>
        <div id="SearchBar">

        </div>
    </header>
</template>

<style scoped>
    header {
        width: 100vw;
        height: 12vh;
        background-color: rgb(14, 180, 53);
        color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
        padding: 1%;
    }

    #RightSide {
        display: flex;
        align-items: center;
        gap: 1%;
        height: 100%;
    }

    #RightSide img {
        height: 100%;
    }

</style>

