// Shared Game Engine for all clicker games
const gameState = {
  score: 0,
  level: 1,
  totalClicks: 0,
  upgrades: {},
  clickMultiplier: 1,
  autoClickPerSecond: 0,
}

function initializeGame(config) {
  // Set level targets and rewards
  gameState.levelTargets = config.levelTargets
  gameState.rewards = config.rewards
  gameState.levelImages = config.levelImages
  gameState.upgrades = {}

  // Initialize upgrade states
  config.upgrades.forEach((upgrade, idx) => {
    gameState.upgrades[idx] = { ...upgrade, purchased: false }
  })

  // Render initial UI
  renderStats()
  renderUpgrades(config.upgrades)
  updateGameImage()
  startAutoClicker()
}

function handleClick() {
  const clickValue = gameState.clickMultiplier
  gameState.score += clickValue
  gameState.totalClicks += 1

  // Play click sound
  const clickSound = document.getElementById("click-sound")
  if (clickSound) {
    clickSound.currentTime = 0
    clickSound.play().catch(() => {})
  }

  // Show combo animation
  showComboAnimation(clickValue)

  // Bounce effect on image
  const image = document.getElementById("game-image")
  image.classList.remove("bounce-effect")
  void image.offsetWidth // Force reflow
  image.classList.add("bounce-effect")

  // Update UI
  renderStats()
  checkLevelCompletion()
}

function showComboAnimation(value) {
  const combo = document.getElementById("combo")
  if (combo) {
    combo.textContent = `+${value} 🔥`
    combo.style.display = "block"
    combo.style.animation = "none"
    void combo.offsetWidth // Force reflow
    combo.style.animation = "floatUp 1s ease-out forwards"

    setTimeout(() => {
      combo.style.display = "none"
    }, 1000)
  }
}

function renderStats() {
  const currentTarget = gameState.levelTargets[gameState.level - 1]
  const progress = Math.min(gameState.score, currentTarget)
  const progressPercent = (progress / currentTarget) * 100

  // Update stat cards
  document.getElementById("score").textContent = gameState.score
  document.getElementById("level").textContent = gameState.level
  document.getElementById("target").textContent = currentTarget
  document.getElementById("reward").textContent = `$${gameState.rewards[gameState.level - 1]}`

  // Update progress bar
  const progressBar = document.getElementById("progress-bar")
  if (progressBar) {
    progressBar.style.width = progressPercent + "%"
  }

  // Update progress text
  const progressText = document.getElementById("progress-text")
  if (progressText) {
    progressText.textContent = `${progress} / ${currentTarget} clicks`
  }
}

function checkLevelCompletion() {
  const currentTarget = gameState.levelTargets[gameState.level - 1]

  if (gameState.score >= currentTarget && gameState.level < 5) {
    celebrateLevel()
  } else if (gameState.level === 5 && gameState.score >= currentTarget) {
    celebrateGameCompletion()
  }
}

function celebrateLevel() {
  // Play level complete sound
  const levelSound = document.getElementById("level-complete-sound")
  if (levelSound) {
    levelSound.currentTime = 0
    levelSound.play().catch(() => {})
  }

  // Show celebration modal
  const modal = document.getElementById("celebration-modal")
  const rewardAmount = document.getElementById("reward-amount")

  if (modal && rewardAmount) {
    rewardAmount.textContent = `$${gameState.rewards[gameState.level - 1]}`
    modal.classList.add("active")
  }
}

function celebrateGameCompletion() {
  const modal = document.getElementById("celebration-modal")
  const title = document.getElementById("modal-title")
  const message = document.getElementById("modal-message")
  const image = document.getElementById("celebration-image")

  if (modal) {
    if (title) title.textContent = "Game Complete! 🏆"
    if (message) message.textContent = "You've conquered all 5 levels!"
    if (image) image.textContent = "👑"

    const nextBtn = modal.querySelector(".btn-primary")
    if (nextBtn) {
      nextBtn.textContent = "Play Again"
      nextBtn.onclick = () => {
        gameState.score = 0
        gameState.level = 1
        gameState.clickMultiplier = 1
        gameState.autoClickPerSecond = 0
        gameState.upgrades = {}

        const config = window.gameConfig
        config.upgrades.forEach((upgrade, idx) => {
          gameState.upgrades[idx] = { ...upgrade, purchased: false }
        })

        closeModal()
        renderStats()
        renderUpgrades(config.upgrades)
        updateGameImage()
      }
    }
  }
}

function closeModal() {
  const modal = document.getElementById("celebration-modal")
  if (modal) {
    modal.classList.remove("active")
    // Advance level
    gameState.level += 1
    gameState.score = 0
    renderStats()
    updateGameImage()
  }
}

function renderUpgrades(upgrades) {
  const container = document.getElementById("upgrades-container")
  if (!container) return

  container.innerHTML = upgrades
    .map((upgrade, idx) => {
      const purchased = gameState.upgrades[idx]?.purchased
      return `
                <div class="upgrade-card">
                    <div class="upgrade-header">
                        <span class="upgrade-icon">${upgrade.icon}</span>
                        <span class="upgrade-name">${upgrade.name}</span>
                    </div>
                    <p class="upgrade-desc">
                        ${upgrade.multiplier ? `+${upgrade.multiplier}x clicks` : `+${upgrade.perSecond} clicks/sec`}
                    </p>
                    <button 
                        class="upgrade-cost"
                        onclick="purchaseUpgrade(${idx})"
                        ${purchased ? "disabled" : ""}
                    >
                        ${purchased ? "✓ Purchased" : `$${upgrade.cost}`}
                    </button>
                </div>
            `
    })
    .join("")
}

function purchaseUpgrade(idx) {
  const upgrade = gameState.upgrades[idx]
  if (!upgrade || upgrade.purchased) return

  // Deduct cost from score
  if (gameState.score >= upgrade.cost) {
    gameState.score -= upgrade.cost
    upgrade.purchased = true

    // Apply upgrade effect
    if (upgrade.multiplier) {
      gameState.clickMultiplier *= upgrade.multiplier
    }
    if (upgrade.perSecond) {
      gameState.autoClickPerSecond += upgrade.perSecond
    }

    renderStats()
    renderUpgrades(
      Object.values(gameState.upgrades).map((u) => {
        const { purchased, ...rest } = u
        return rest
      }),
    )
  }
}

function updateGameImage() {
  const image = document.getElementById("game-image")
  if (image && gameState.levelImages) {
    const levelIdx = Math.min(gameState.level - 1, gameState.levelImages.length - 1)
    image.textContent = gameState.levelImages[levelIdx]
  }
}

function startAutoClicker() {
  setInterval(() => {
    if (gameState.autoClickPerSecond > 0) {
      gameState.score += gameState.autoClickPerSecond
      renderStats()
      checkLevelCompletion()
    }
  }, 1000)
}
