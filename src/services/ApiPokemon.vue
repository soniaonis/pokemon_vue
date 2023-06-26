<script>

export async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    console.log (data);
  } catch (error) {
    console.log('Pokemon not found');
  }
}

</script>

