// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to image overlay buttons
    const imageButtons = document.querySelectorAll('.title-button');
    imageButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Find corresponding image within each article
        const article = button.parentElement;
        const img = article.querySelector('img');
        if (img) {
          openModal(img.src, img.alt);
        }
      });
    });
  
    // Add additional smooth scrolling for the Top button
    const topButton = document.querySelector('.top-button');
    if (topButton) {
      topButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
  
  // Function to create and display a modal with the full‐size image
  function openModal(imageSrc, altText) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Set the inner HTML of the modal
    modal.innerHTML = `
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <img src="${imageSrc}" alt="${altText}">
      </div>
    `;
  
    // Add the modal to the body
    document.body.appendChild(modal);
  
    // Close the modal when the close icon or the overlay is clicked
    modal.addEventListener('click', function (event) {
      if (
        event.target.classList.contains('modal') ||
        event.target.classList.contains('modal-close')
      ) {
        document.body.removeChild(modal);
      }
    });
  }
  