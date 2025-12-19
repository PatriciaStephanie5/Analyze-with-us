
// ===============================
// Analyze with Us - JavaScript
// ===============================

// 1. Welcome message (good for debugging)
console.log("Welcome to Analyze with Us 🚀");

// 2. Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// 3. Highlight clicked project links
const projectLinks = document.querySelectorAll(".card a");

projectLinks.forEach(link => {
  link.addEventListener("click", () => {
    link.style.color = "#0a2540";
  });
});

// 4. Contact form handling (works if you add a form)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
      "Thank you for reaching out! Your message has been received."
    );

    contactForm.reset();
  });
}

// 5. Dynamic year in footer (optional upgrade)
const footer = document.querySelector(".footer");

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML += `<p>© ${year} Analyze with Us</p>`;
}
