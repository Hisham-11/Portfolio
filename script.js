
  // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Basic form submission handling (you'll need backend for actual submission)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted! (This is a placeholder)');
  // Add your form submission logic here
});