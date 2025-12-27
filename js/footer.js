function loadFooter() {
  const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section">
                    <h4>About ClickerBee</h4>
                    <p>Your ultimate destination for addictive clicker games. Play 15+ games and enjoy endless progression.</p>
                </div>
                
                <div class="footer-section">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="privacy.html">Privacy</a></li>
                        <li><a href="terms.html">Terms</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Popular Games</h4>
                    <ul>
                        <li><a href="games/capybara-clicker.html">Capybara Clicker</a></li>
                        <li><a href="games/planet-clicker.html">Planet Clicker</a></li>
                        <li><a href="games/space-bar-clicker.html">Space Bar Clicker</a></li>
                        <li><a href="games/money-clicker.html">Money Clicker</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Most Played</h4>
                    <ul>
                        <li><a href="/games/clicker-heroes.html">Clicker Heroes</a></li>
                        <li><a href="/games/candy-clicker.html">Candy Clicker</a></li>
                        <li><a href="/games/energy-clicker.html">Energy Clicker</a></li>
                        <li><a href="/games/kiwi-clicker.html">Kiwi Clicker</a></li>
                    </ul>
                </div>               
                
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 ClickerBee. All rights reserved. | Built with clicks and code.</p>
            </div>
        </footer>
    `

  document.getElementById("footer-container").innerHTML = footerHTML

  const style = `
        .footer {
            background-color: var(--black);
            color: var(--white);
            border-top: 4px solid var(--primary-purple);
            padding: 3rem 2rem 1rem;
        }
        
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .footer-section h4 {
            font-size: 1rem;
            margin-bottom: 1rem;
            color: var(--primary-green);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .footer-section p {
            font-size: 0.9rem;
            line-height: 1.6;
            color: #ccc;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section li {
            margin-bottom: 0.5rem;
        }
        
        .footer-section a {
            color: #ccc;
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            display: inline-block;
        }
        
        .footer-section a:hover {
            color: var(--primary-blue);
            transform: translateX(4px);
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            font-size: 1.5rem;
        }
        
        .social-links a {
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        
        .social-links a:hover {
            transform: scale(1.2) rotate(10deg);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 2px solid var(--dark-gray);
            font-size: 0.85rem;
            color: #999;
        }
        
        @media (max-width: 768px) {
            .footer-container {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .footer {
                padding: 2rem 1rem 1rem;
            }
        }
    `

  const styleSheet = document.createElement("style")
  styleSheet.textContent = style
  document.head.appendChild(styleSheet)
}

document.addEventListener("DOMContentLoaded", loadFooter)
