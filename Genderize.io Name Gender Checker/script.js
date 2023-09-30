document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetchData");
    fetchDataButton.addEventListener("click", checkGender);
});

function checkGender() {
    const nameInput = document.getElementById("name");
    const genderInfo = document.getElementById("genderInfo");
    const apiUrl = `https://api.genderize.io?name=${nameInput.value}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.gender) {
                genderInfo.textContent = `Name: ${data.name}, Gender: ${data.gender}, Probability: ${data.probability}`;
            } else {
                genderInfo.textContent = "Gender information not available for this name.";
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            genderInfo.textContent = "Error fetching data. Please check the name.";
        });
}


