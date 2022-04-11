const PlayButton = props => {

    const pokemonChoices = [];
    var correctPokemon;


    /**
     * Generates 5 random numbers and adds them as our Pokemon choices.
     * 809 = Total number of pokemon up to Gen 7 (Sun/Moon)
     * 905 = Total number of pokemon up to Gen 8 (Sword/Shield and Legends Arceus)
     * PokeAPI notes that Gen 8 info may be inaccurate.
     * Random min/max format: (MAX - MIN + 1) + MIN
     */
    function startGame() {
        const startButton = document.getElementById("startButton");
        startButton.disabled = true;
        for (let i = 0; i < 5; i++) {
            pokemonChoices.push(Math.floor(Math.random() * (809 - 1 + 1) + 1));
        }
        // Randomly assign a correct pokemon out of the possible choices
        correctPokemon = pokemonChoices.at(Math.floor(Math.random() * (5 - 1 + 1) + 1));

        // DEBUG INFO
        console.log("Game started. " + pokemonChoices);
        console.log("The answer is: " + correctPokemon);

        getPokemonData();
    }

    async function getPokemonData() {

        // Randomly assign a correct pokemon out of the possible choices
        correctPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonChoices.at(Math.floor(Math.random() * (5 - 1 + 1) + 1)))
          .then((response) => response.json())
          .catch((error) => console.log(error))
          .then ((data) => populatePokemonData(data));
      }

      // TODO: Get the names of each other pokemon in pokemonChoices

      function populatePokemonData(data) {
          console.log(data);
          console.log("The correct pokemon is: " + data.name);
      }

    return (
        <button value="submit" id="startButton" onClick={startGame}>Start!</button>
    );
}

export default PlayButton;
