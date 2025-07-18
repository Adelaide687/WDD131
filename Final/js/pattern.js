  function getPatternById(id) {
    return patterns.find(pattern => pattern.id === id);
  }
  
  function populatePatternPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const pattern = getPatternById(id);
  
    if (!pattern) {
      document.body.innerHTML = "<p>Pattern not found.</p>";
      return;
    }
  
    document.title = pattern.name;
  
    // Header
    const header = document.getElementById("pattern-header");
    header.innerHTML = `
      <img src="${pattern.image}" alt="${pattern.name}" width="150" />
      <h2>${pattern.name}</h2>
    `;
  
    // Sidebar
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = `
      <h2>Materials</h2>
      <ul>${pattern.materials.map(item => `<li>${item}</li>`).join("")}</ul>
  
      <h2>Abbreviations</h2>
      <ul>${pattern.abbreviations.map(item => `<li>${item}</li>`).join("")}</ul>
    `;
  
    // Instructions
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = `
      <h2>Pattern</h2>
      ${pattern.instructions.map(step => `<p>${step}</p>`).join("")}
    `;
  }
  
  window.onload = populatePatternPage;
  