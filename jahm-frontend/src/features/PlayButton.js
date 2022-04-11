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
        for (let i = 0; i < 5; i++) {
            pokemonChoices.push(Math.floor(Math.random() * (809 - 1 + 1) + 1));
        }
        console.log("Game started. " + pokemonChoices);
    }

    return (
        <button value="submit" onClick={startGame}>Start!</button>
    );
}

export default PlayButton;
