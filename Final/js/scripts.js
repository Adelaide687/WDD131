function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayCards(patternList) {
  const container = document.getElementById("pattern-cards");
  container.innerHTML = "";

  if (patternList.length === 0) {
    container.innerHTML = "<p>No patterns found.</p>";
    return;
  }

  patternList.forEach(pattern => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `pattern.html?id=${pattern.id}`;
    card.innerHTML = `
      <img src="${pattern.image}" alt="${pattern.name}" />
      <h2>${pattern.name}</h2>
    `;
    container.appendChild(card);
  });
}

function initializePage() {
  const shuffled = [...patterns];
  shuffle(shuffled);
  const initialThree = shuffled.slice(0, 3);
  displayCards(initialThree);
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
      // Reset to original 3 when input is cleared
      initializePage();
    } else {
      const filtered = patterns.filter(pattern =>
        pattern.name.toLowerCase().includes(query)
      );
      displayCards(filtered);
    }
  });
}

window.onload = () => {
  initializePage();
  setupSearch();
};
