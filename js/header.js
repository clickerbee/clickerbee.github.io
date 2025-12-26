function loadHeader() {
  const headerHTML = `
        <header class="header">
            <div class="header-container">
                <div class="logo">
                    <span class="logo-emoji">🐝</span>
                    <span class="logo-text">ClickerBee</span>
                </div>
                <button class="menu-toggle" id="menu-toggle">☰</button>
                <nav class="nav" id="nav">
                    <a href="/" onclick="closeMenu()">Home</a>
                    <a href="#games" onclick="closeMenu()">Games</a>
                    <a href="#popular" onclick="closeMenu()">Popular</a>
                    <a href="#about" onclick="closeMenu()">About</a>
                </nav>
            </div>
        </header>
    `

  document.getElementById("header-container").innerHTML = headerHTML

  const style = `
        .header {
            position: sticky;
            top: 0;
            background-color: var(--black);
            color: var(--white);
            border-bottom: 3px solid var(--primary-blue);
            z-index: 1000;
        }
        
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.5rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .logo:hover {
            transform: scale(1.05);
        }
        
        .logo-emoji {
            font-size: 2rem;
            animation: bounce 2s ease-in-out infinite;
        }
        
        .logo-text {
            color: var(--primary-blue);
        }
        
        .nav {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav a {
            color: var(--white);
            text-decoration: none;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary-green);
            transition: width 0.3s ease;
        }
        
        .nav a:hover::after {
            width: 100%;
        }
        
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            transition: all 0.3s ease;
        }
        
        .menu-toggle:hover {
            color: var(--primary-green);
        }
        
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }
            
            .nav {
                position: absolute;
                top: 60px;
                left: 0;
                right: 0;
                background-color: var(--black);
                flex-direction: column;
                gap: 1rem;
                padding: 1rem;
                border-bottom: 3px solid var(--primary-blue);
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            
            .nav.active {
                max-height: 300px;
            }
            
            .nav a {
                display: block;
                padding: 0.5rem 0;
            }
        }
    `

  const styleSheet = document.createElement("style")
  styleSheet.textContent = style
  document.head.appendChild(styleSheet)

  const toggle = document.getElementById("menu-toggle")
  const nav = document.getElementById("nav")

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
}

function closeMenu() {
  const nav = document.getElementById("nav")
  nav.classList.remove("active")
}

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.boxShadow = "none"
  }
})

document.addEventListener("DOMContentLoaded", loadHeader)
