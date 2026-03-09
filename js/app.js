const form = document.getElementById("castForm");
const output = document.getElementById("output");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;

  output.textContent = "Casting your character...";

  try {
    const response = await fetch("data/character.json");

    if (!response.ok) {
      throw new Error("Could not load character.json");
    }

    const characters = await response.json();

    const character = characters[Math.floor(Math.random() * characters.length)];

    const text = `
Name: ${character.name}

Role: ${character.role}

World: ${genre}

Mood: ${mood}

Trait:
${character.trait}

Voice Line:
"${character.voice_line}"
`;

    output.textContent = text;

    output.classList.remove("reveal");
    void output.offsetWidth;
    output.classList.add("reveal");
  } catch (error) {
    output.textContent = "Something went wrong generating your character.";
    console.error(error);
  }
});