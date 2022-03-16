const fetchPokemon = () => {
  const pokeInput = document.getElementById("pokeName");
  let pokeName = pokeInput.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

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
      let pokeImg = data.sprites.front_default;
      console.log(pokeImg);
      pokeImage(pokeImg);
    });
};

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
