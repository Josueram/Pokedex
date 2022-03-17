const fetchPokemon = () => {
  const pokeInput = document.getElementById("pokeInput");
  let pokemon = pokeInput.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  fetch(url)
    .then((res) => {
      if (res.status != 200) {
        pokeImage("https://i.pinimg.com/originals/0c/ea/6a/0cea6af976c3b89f0d79d200f4a136e0.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);

      let name = data.name;
      let image = data.sprites.front_default;
      let type = data.types;
      let stats = data.stats;

      pokeName(name);
      pokeImage(image);
      pokeType(type);
      pokeStats(stats);
      return data;
    })
    .then((data) => {
      let image = data.sprites.front_default;
    })
};

const pokeImage = (url) => {
  const image = document.getElementById("pokeImg");
  image.src = url;
};

const pokeName = (name) => {
  const namePokemon = document.getElementById("pokeName").innerHTML = name;
};

const pokeType = (types) => {
  for (let i = 0; i <= types.length; i++) {
    let name = types[i].type.name;
    console.log(name)
    const typePokemon = document.getElementById("type").innerHTML += name + " ";
  }
};

const pokeStats = (stats) => {
  for (let i = 0; i <= stats.length; i++) {
    let { base_stat } = stats[i];
    const statsPokemon = document.getElementById("stats").innerHTML += base_stat + " ";
  }
}