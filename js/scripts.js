// START EMPTY CART
let cart = [];

// ADD TO CART FUNCTION
function addToCart(product) {
  cart.push(product);
  alert(`${product} has been added to your cart!`);
  updateCartDisplay();
}

// ADD NAVBAR TO THE PLACEHOLDER
fetch("navbar.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error('error loading navbar');
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  })
  .catch((error) => console.error('Error loading navbar:', error));

// EVENT LISTENER FOR BUTTONS
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.getAttribute('data-product');
    addToCart(product);
  });
});
 // ZIP CODE VALIDATION
function validateZipCode(event) {
  event.preventDefault(); //STOP FORM SUBMISSION

  const zipInput = document.getElementById("zip").value;

    // CHECK IF ZIP CODE IS VALID
    if (/^\d{5}$/.test(zipInput)) { //OBTAINED SOME EXAMPLES FOR GITHUB REPOSITORIES
     alert("Zip code is valid!");
      
      } else {
        alert("Invalid zip code. Please enter a 5-digit numeric zip code.");
      }
  }
