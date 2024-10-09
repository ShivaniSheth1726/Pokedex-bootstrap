// node imports
import shuffle from "array-shuffle";
// data imports 
import data from "./data.json";
// Component imports
import PokemonCard from "./components/PokemonCard";

// === DOM Targeting ===
const inputEl = document.querySelector('input[type="text"]');
const dataRow = document.querySelector("[data-row]");

renderPokemon(shuffle(data)); //shuffle data on every refresh

// Give list, it will render them
function renderPokemon(list) {
  dataRow.textContent = "";
// to show no result found when result is 0
  if (list.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "No results found.";
    dataRow.appendChild(noResultsMessage);
    return;
  }
// to iterate and show each element
  list.forEach((pokemonObj) => {
    const pokemon=PokemonCard(pokemonObj);
    dataRow.appendChild(pokemon);
  });
}
// Apply search functionality in bothcase
function handleSearch(input) {
  const filteredPokemon = data.filter((pokemonObj) =>{
   return pokemonObj.name.toLowerCase().includes(input)
});

  renderPokemon(filteredPokemon);
}

inputEl.addEventListener("input", (e) => {
  // console.log(e); //log the key pressed 
  // console.log('hey'); //log the word when key pressed
  
  const currentInput = e.target.value.trim().toLowerCase();
  handleSearch(currentInput);
});

// Add / to active search
document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    // Don't type
    e.preventDefault(); //after pressing / dont apper on the search bar
    inputEl.focus();
  }
});