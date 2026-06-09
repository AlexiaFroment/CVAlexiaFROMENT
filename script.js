const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰"
})

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
    menuToggle.textContent = "☰"
  })
})

const revealElements = document.querySelectorAll(
  ".section, .card, .project-card, .timeline-item",
)

revealElements.forEach((element) => {
  element.classList.add("reveal")
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  },
  {
    threshold: 0.15,
  },
)

revealElements.forEach((element) => observer.observe(element))
