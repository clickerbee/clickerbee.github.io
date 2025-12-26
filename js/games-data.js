const gamesData = [
  { name: "Capybara Clicker", emoji: "🦫", link: "games/capybara-clicker.html" },
  { name: "Planet Clicker", emoji: "🪐", link: "games/planet-clicker.html" },
  { name: "Space Bar Clicker", emoji: "⌨️", link: "games/space-bar-clicker.html" },
  { name: "Clicker Counter", emoji: "🔢", link: "games/clicker-counter.html" },
  { name: "Clicker Heroes", emoji: "⚔️", link: "games/clicker-heroes.html" },
  { name: "Candy Clicker", emoji: "🍬", link: "games/candy-clicker.html" },
  { name: "Duck Clicker", emoji: "🦆", link: "games/duck-clicker.html" },
  { name: "Energy Clicker", emoji: "⚡", link: "games/energy-clicker.html" },
  { name: "Money Clicker", emoji: "💰", link: "games/money-clicker.html" },
  { name: "Button Clicker", emoji: "🔘", link: "games/button-clicker.html" },
  { name: "World Clicker", emoji: "🌍", link: "games/world-clicker.html" },
  { name: "Burger Clicker", emoji: "🍔", link: "games/burger-clicker.html" },
  { name: "Clock Clicker", emoji: "⏰", link: "games/clock-clicker.html" },
  { name: "Kiwi Clicker", emoji: "🥝", link: "games/kiwi-clicker.html" },
  { name: "Cat Clicker", emoji: "🐱", link: "games/cat-clicker.html" },
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
