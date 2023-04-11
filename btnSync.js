// Select the reload button element
const reloadBtn = document.querySelector('#reload-btn');

// Add a click event listener to the reload button
reloadBtn.addEventListener('click', function () {
    // Add a class to the reload button when clicked
    // reloadBtn.classList.add('clicked');
    // reloadBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-spin fa-fade"></i>';

    reloadBtn.innerHTML = '<i id="quote">Generated</i> <i class="fa-solid fa-arrows-rotate fa-fade"></i>';

    // Generate the quote
    generateQuote();

    // Remove the class from the reload button after a short delay
    setTimeout(function () {
        reloadBtn.innerHTML = '<i id="quote">Generate</i> <i class="fa-solid fa-arrows-rotate fa-spin"></i>';
    }, 600);

    setTimeout(function () {
        reloadBtn.innerHTML = '<i id="quote">Generate</i> <i class="fa-solid fa-arrows-rotate"></i>';
    }, 1600);

});

// Function to generate the quote
function generateQuote() {
    // Your code to generate the quote goes here
}