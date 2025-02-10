// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        // Check if the link is an internal anchor (starts with #)
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault(); // Prevent default anchor behavior
          const targetId = this.getAttribute('href'); // Get the target section ID
          const targetSection = document.querySelector(targetId); // Find the target section
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
          }
        }
        // If it's an external link (e.g., to another page), let it behave normally
      });
    });
  
    // Lightbox functionality for gallery images
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    if (lightbox && lightboxImg && closeBtn) {
      // Open lightbox when an image is clicked
      document.querySelectorAll('.gallery-grid img, .gallery-grid2 img').forEach(image => {
        image.addEventListener('click', () => {
          lightbox.style.display = 'block';
          lightboxImg.src = image.src;
        });
      });
  
      // Close lightbox when the close button is clicked
      closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
  
      // Close lightbox when clicking outside the image
      lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
          lightbox.style.display = 'none';
        }
      });
    }
  
    // Enrollment popup functionality
    const enrolPopup = document.getElementById('enrol-popup');
    const enrolButton = document.querySelector('.hero .btn'); // Assuming the "Enrol Now" button is in the hero section
    const closePopup = document.querySelector('.close-popup');
  
    if (enrolPopup && enrolButton && closePopup) {
      // Open the popup when the "Enrol Now" button is clicked
      enrolButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default button behavior (e.g., scrolling to a section)
        enrolPopup.style.display = 'flex'; // Show the popup
      });
  
      // Close the popup when the close button is clicked
      closePopup.addEventListener('click', () => {
        enrolPopup.style.display = 'none'; // Hide the popup
      });
  
      // Close the popup when clicking outside the form
      window.addEventListener('click', (e) => {
        if (e.target === enrolPopup) {
          enrolPopup.style.display = 'none'; // Hide the popup
        }
      });
  
      // Handle form submission
      const enrolForm = document.getElementById('enrol-form');
      if (enrolForm) {
        enrolForm.addEventListener('submit', (e) => {
          e.preventDefault(); // Prevent form submission
          alert('Thank you for enrolling! We will contact you soon.'); // Show a confirmation message
          enrolPopup.style.display = 'none'; // Hide the popup after submission
        });
      }
    }
  });