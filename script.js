/*
  Isi publicEmail hanya jika kamu ingin menampilkan email di situs publik.
  Nomor HP tidak dipasang secara default.
*/
const publicEmail = "";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

if (publicEmail.trim()) {
  const contactSection = document.querySelector("#kontak");
  const emailLink = document.querySelector("#email-link");
  const contactNav = document.querySelector("[data-contact-nav]");
  if (contactSection && emailLink) {
    contactSection.hidden = false;
    emailLink.href = `mailto:${publicEmail.trim()}`;
  }
  if (contactNav) contactNav.hidden = false;
}
