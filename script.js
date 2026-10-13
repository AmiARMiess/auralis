const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const signupForm = document.querySelector("#signup-form");
const formMessage = document.querySelector("#form-message");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
    }
  });
}

if (signupForm && formMessage) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const email = formData.get("email");

    if (typeof email !== "string" || !email.trim()) {
      formMessage.textContent = "Enter your email address to join the list.";
      return;
    }

    formMessage.textContent = "You’re on the list. Keep an eye on your inbox!";
    signupForm.reset();
  });
}
