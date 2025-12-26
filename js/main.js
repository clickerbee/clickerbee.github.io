// Add smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add intersection observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
    }
  })
}, observerOptions)

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  observer.observe(section)
})

// Easter egg: Click the bee emoji
const logo = document.querySelector(".logo-emoji")
if (logo) {
  let clickCount = 0
  logo.addEventListener("click", () => {
    clickCount++
    logo.style.animation = "spin 0.6s ease-in-out"
    setTimeout(() => {
      logo.style.animation = "bounce 2s ease-in-out infinite"
    }, 600)

    if (clickCount === 5) {
      alert("🎉 You found the easter egg! You're a true Clicker Bee master! 🐝")
      clickCount = 0
    }
  })
}

// Add click feedback for all buttons
document.querySelectorAll(".btn, .game-card").forEach((element) => {
  element.addEventListener("click", function (e) {
    const ripple = document.createElement("span")
    ripple.classList.add("ripple")
    this.appendChild(ripple)

    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"

    setTimeout(() => ripple.remove(), 600)
  })
})

// Add ripple animation style
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)

// Favicon and logo generation (placeholder SVG)
function createFavicon() {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="#0066ff" width="100" height="100"/><text x="50" y="60" font-size="70" font-weight="900" text-anchor="middle" fill="#ffcc00" font-family="Arial">🐝</text></svg>'
  const blob = new Blob([svg], { type: "image/svg+xml" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("link")
  link.rel = "icon"
  link.href = url
  document.head.appendChild(link)
}

document.addEventListener("DOMContentLoaded", createFavicon)

// Performance optimization: Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.add("loaded")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}
