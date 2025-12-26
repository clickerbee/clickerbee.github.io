const gamesData = [
  { name: "Capybara Clicker", emoji: "🦆" },
  { name: "Planet Clicker", emoji: "🪐" },
  { name: "Space Bar Clicker", emoji: "⌨️" },
  { name: "Clicker Counter", emoji: "🔢" },
  { name: "Clicker Heroes", emoji: "⚔️" },
  { name: "Candy Clicker", emoji: "🍬" },
  { name: "Duck Clicker", emoji: "🦆" },
  { name: "Energy Clicker", emoji: "⚡" },
  { name: "Money Clicker", emoji: "💰" },
  { name: "Button Clicker", emoji: "🔘" },
  { name: "World Clicker", emoji: "🌍" },
  { name: "Burger Clicker", emoji: "🍔" },
  { name: "Clock Clicker", emoji: "⏰" },
  { name: "Kiwi Clicker", emoji: "🥝" },
  { name: "Cat Clicker", emoji: "🐱" },
]

function renderGames() {
  const container = document.getElementById("games-container")
  container.innerHTML = gamesData
    .map(
      (game, index) => `
        <div class="game-card" onclick="playGame('${game.name}')">
            <div class="game-emoji">${game.emoji}</div>
            <h3>${game.name}</h3>
        </div>
    `,
    )
    .join("")
}

function playGame(gameName) {
  alert(`🎮 ${gameName} coming soon!\n\nClick away to unlock the full game experience!`)
}

document.addEventListener("DOMContentLoaded", renderGames)
