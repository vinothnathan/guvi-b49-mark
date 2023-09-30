// Function to fetch a random dog image from the API
function fetchRandomDogImage() {
  // API URL
  const apiUrl = "https://dog.ceo/api/breeds/image/random";

  // Fetch data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Get the image URL from the API response
      const imageUrl = data.message;

      // Update the image source in the DOM
      const dogImage = document.getElementById("dog-image");
      dogImage.src = imageUrl;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Event listener for the "Fetch New Dog" button
const newDogButton = document.getElementById("new-dog-button");
newDogButton.addEventListener("click", fetchRandomDogImage);

// Fetch the first random dog image when the page loads
fetchRandomDogImage();
