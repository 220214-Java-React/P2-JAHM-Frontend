const PlayButton = props => {

    const pokemonID = [];
    let pokemonChoice = [];
    var correctPokemon;

    /**
     * Generates 5 random numbers as our Pokemon choices.
     * 809 = Total number of pokemon up to Gen 7 (Sun/Moon)
     * 905 = Total number of pokemon up to Gen 8 (Sword/Shield and Legends Arceus)
     * PokeAPI notes that Gen 8 info may be inaccurate.
     * Random min/max format: (MAX - MIN + 1) + MIN
     */
    function startGame() {
        const startButton = document.getElementById("startButton");
        startButton.disabled = true;
        for (let i = 0; i < 5; i++) {
            pokemonID.push(Math.floor(Math.random() * (809 - 1 + 1) + 1));
        }

        // Randomly assign a correct pokemon out of the possible choices
        correctPokemon = pokemonID.at(Math.floor(Math.random() * (5 - 1 + 1) + 1));

        // DEBUG INFO
        console.log("Game started. " + pokemonID);

        // Send the fetch request
        getPokemonData();
    }

    function getPokemonData() {
        
      // Get data for all pokemon choices
      for (let i = 0; i < 5; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonID[i])
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .then ((data) => populatePokemonData(data));
    }

      // Push data to the list of pokemon choices
      function populatePokemonData(data) {
          console.log("Added " + data.name + " to the list of Pokemon choices.");
          pokemonChoice.push(data);
      }
    }

    /**
     * Return the Pokemon whose ID matches that of the correctPokemon
     * @param {*} pokemon a Pokemon from the pokemonChoice list
     * @returns An object containing the correct Pokemon's data
     */
    function getCorrectPokemon(pokemon) {
        return pokemon.id == correctPokemon;
    }

    /**
     * For debug/demo purposes.
     * We would want to send "pokemonChoice.find(getCorrectPokemon)" back to the parent component so that it can be checked against the player's answers.
     */
    function showAnswer() {
        console.log("The ID of the correct Pokemon is: " + correctPokemon);

        // Use this to get the correct pokemon after the data has been populated
        console.log("The name of the correct Pokemon is: " + pokemonChoice.find(getCorrectPokemon).name);
    }

    return (
        <>
        <button value="submit" id="startButton" onClick={startGame}>Start!</button>
        <button value="submit" id="checkButton" onClick={showAnswer}>Display the correct Pokemon ID and name in console</button>
        </>
    );
}

export default PlayButton;
