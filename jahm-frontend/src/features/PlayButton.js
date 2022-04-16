const PlayButton = props => {

    const pokemonID = [];
    let pokemonChoice = [];

    /**
     * Generates 5 random numbers as our Pokemon choices.
     * 809 = Total number of pokemon up to Gen 7 (Sun/Moon)
     * 905 = Total number of pokemon up to Gen 8 (Sword/Shield and Legends Arceus)
     * PokeAPI notes that Gen 8 info may be inaccurate.
     * Random min/max format: (MAX - MIN + 1) + MIN
     */
    function startGame() {
        const startButton = document.getElementById("startButton");
        
        for (let i = 0; i < 5; i++) {
            pokemonID.push(Math.floor(Math.random() * (809 - 1 + 1) + 1));
        }

        // DEBUG INFO
        console.log("Game started. " + pokemonID);

        // Send the fetch request
        getPokemonData();
    }

    function getPokemonData() {

        // For as many Pokemon as we have specified, get that pokemon's info and populate our data
        for (let i = 0; i < 5; i++) {
            fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonID[i])
                .then((response) => response.json())
                .catch((error) => console.log(error))
                .then((data) => populatePokemonData(data));
        }

        // Push data to our local list of pokemon choices
        function populatePokemonData(data) {
            //console.log("Added " + data.name + " to the list of Pokemon choices.");
            props.populatePokemonChoice(data);
        }

    }

    return (
        <>
            {props.gamePlaying ? <span hidden>No Content</span> : <button value="submit" id="startButton" onClick={startGame}>Start!</button>}
        </>
    );
}

export default PlayButton;
