const url = "https://pokeapi.co/api/v2/pokemon/";
let pokemon = "";

const searchBox = document.getElementsByClassName("search-box")[0];
const searchButton = document.getElementsByClassName("search-button")[0];
const pokemonImg = document.getElementsByClassName("pokedex-screen-image")[0];
const pokemonName = document.getElementsByClassName("pokemon-name")[0];
const pokemonTypes = document.getElementsByClassName("pokemon-types")[0];
const pokemonStats = document.getElementsByClassName("pokemon-stats")[0];
const pokemonAbility1 = document.getElementsByClassName("pokemon-ability1")[0];
const pokemonAbility2 = document.getElementsByClassName("pokemon-ability2")[0];

function fetchPokemon() {
  clearDisplayPokemon();
  
  pokemon = searchBox.value.toLowerCase();
  searchBox.value = "";

  setTimeout(function() {
  let pokemonURL = url + pokemon;
    
    fetch(pokemonURL)
      .then((response) => {
        if (!response.ok) { 
          displayError();
        }
        return response.json();
      })
      .then(searchPokemon);
    }, 1000);
  }

function searchPokemon(result) {
  clearDisplayPokemon();
  
  let name = result.name.charAt(0).toUpperCase() + result.name.substring(1);

  pokemonImg.src = result.sprites["front_default"];
  pokemonName.innerHTML = name;
  pokemonTypes.innerHTML = "Tipo: ";
  pokemonStats.innerHTML = "Estadísticas:" + "</br>";
  pokemonAbility1.innerHTML = "Habilidad: " + "</br>" + result.abilities[0].ability.name;
  pokemonAbility2.innerHTML = "Habilidad: " + "</br>" + result.abilities[1].ability.name;
  
  for (let i = 0; i < result.types.length; i++) {
    let li = document.createElement("li");
    li.classList.add("pokemon-type");
    li.innerHTML = result.types[i].type.name;
    pokemonTypes.appendChild(li);
  }

  for (let i = 0; i < result.stats.length; i++) {
    let li = document.createElement("li");
    li.classList.add("pokemon-stats");
    li.innerHTML = result.stats[i].stat.name;
    li.innerHTML += ": " + result.stats[i].base_stat;
    pokemonStats.appendChild(li);
  }
}

function displayError() {
  clearDisplayPokemon();
  pokemonName.innerHTML = "Pokemon no encontrado!";
}

function clearDisplayPokemon() {
  pokemonImg.src = "";
  pokemonName.innerHTML = "";
  pokemonTypes.innerHTML = "";
  pokemonStats.innerHTML = "";
  pokemonAbility1.innerHTML = "";
  pokemonAbility2.innerHTML = "";
}