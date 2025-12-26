const gamesData = [
  { name: "Capybara Clicker", emoji: "🦫", link: "games/capybara-clicker.html" },
  { name: "Planet Clicker", emoji: "🪐", link: "games/planet-clicker.html" },
  { name: "Space Bar Clicker", emoji: "⌨️", link: "games/space-bar-clicker.html" },
  { name: "Clicker Counter", emoji: "🔢", link: "#" },
  { name: "Clicker Heroes", emoji: "⚔️", link: "#" },
  { name: "Candy Clicker", emoji: "🍬", link: "games/candy-clicker.html" },
  { name: "Duck Clicker", emoji: "🦆", link: "#" },
  { name: "Energy Clicker", emoji: "⚡", link: "#" },
  { name: "Money Clicker", emoji: "💰", link: "games/money-clicker.html" },
  { name: "Button Clicker", emoji: "🔘", link: "#" },
  { name: "World Clicker", emoji: "🌍", link: "#" },
  { name: "Burger Clicker", emoji: "🍔", link: "#" },
  { name: "Clock Clicker", emoji: "⏰", link: "#" },
  { name: "Kiwi Clicker", emoji: "🥝", link: "#" },
  { name: "Cat Clicker", emoji: "🐱", link: "#" },
]

function renderGames() {
  const container = document.getElementById("games-container")
  container.innerHTML = gamesData
    .map(
      (game, index) => `
        <div class="game-card" onclick="playGame('${game.name}', '${game.link}')">
            <div class="game-emoji">${game.emoji}</div>
            <h3>${game.name}</h3>
        </div>
    `,
    )
    .join("")
}

function playGame(gameName, gameLink) {
  if (gameLink && gameLink !== "#") {
    window.location.href = gameLink
  } else {
    alert(`🎮 ${gameName} coming soon!\n\nClick away to unlock the full game experience!`)
  }
}

document.addEventListener("DOMContentLoaded", renderGames)
