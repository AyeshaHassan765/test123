// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const cartCountElement = document.getElementById('cart-count');
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    cartCountElement.textContent = cartCount;
  });
});

  