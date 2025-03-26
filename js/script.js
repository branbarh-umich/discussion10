let pokemonList = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"
];

// Answers

// Question 1
let targetTextBox = document.getElementById("host-name");
targetTextBox.innerHTML = "Brandon";

// Question 2

// Get the instruction button:
let instructionButton = document.getElementById("instruction_button");

// Add the "click" event listener:
instructionButton.addEventListener("click", function () {
  // Get the question divs:
  let questions = document.querySelectorAll(".question");

  // Update the question divs:
  for (let question of questions) {
    if (question.style.display === "none") {
      question.style.display = "block";
      instructionButton.innerText = "Hide Instructions";
    } else {
      question.style.display = "none";
      instructionButton.innerText = "Show Instructions";
    }
  }
});

// Question 3
let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");
firstNameInput.addEventListener("input", function () {
  if (firstNameInput.value === "John") {
    lastNameInput.value = "Doe";
  }
});

// Question 4
let userNameInput = document.getElementById("user_name");
let usernameAlert = document.getElementById("username-alert");
userNameInput.addEventListener("input", function () {
  if (pokemonList.includes(userNameInput.value)) {
    usernameAlert.innerText = "Username already exists";
  } else {
    usernameAlert.innerText = "Unique username created";
  }
});

// Question 5
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm_password");
let passwordAlert = document.getElementById("password-alert");
passwordInput.addEventListener("input", function () {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordAlert.innerText = "Password Matches";
  } else {
    passwordAlert.innerText = "Password does not match";
  }
});
confirmPasswordInput.addEventListener("input", function () {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordAlert.innerText = "Password Matches";
  } else {
    passwordAlert.innerText = "Password does not match";
  }
});

// Challenge Problem
let hidePasswordButton = document.getElementById("hide-password");
function togglePasswordVisibility() {
  let newType = passwordInput.type === "text" ? "password" : "text";
  let newText = newType === "password" ? "Show Password" : "Hide Password";

  passwordInput.type = newType;
  confirmPasswordInput.type = newType;
  hidePasswordButton.innerText = newText;
}
hidePasswordButton.addEventListener("click", togglePasswordVisibility);
document.addEventListener("keydown", function (event) {
  if (document.activeElement.tagName.toLowerCase() !== "input" && event.key === "h") {
    event.preventDefault();
    togglePasswordVisibility();
  }
});

// Question 6

// Question 7

// Question 8

// Extra challenge: reset button
