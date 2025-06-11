const character = {
    name: "Snortleblat - Adelaide Plass",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
      if (this.health >= 20) {
        this.level -= 1;
        this.health -= 20;
      } else {
        alert('Character Died');
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
    }
  };
  
  function setCharacter(character) {
    document.getElementsByClassName("name")[0].textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementsByClassName("image")[0].src = character.image;
  }

setCharacter(character);

document.querySelector("#attacked").addEventListener('click', () => {
    character.attacked();
    setCharacter(character);
});

document.querySelector("#levelup").addEventListener('click', () => {
    character.levelUp();
    setCharacter(character)
});


  