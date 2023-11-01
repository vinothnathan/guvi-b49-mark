document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("emailInput");
    const validateBtn = document.getElementById("validateBtn");
    const resultDiv = document.getElementById("result");
    const statusP = document.getElementById("status");

    validateBtn.addEventListener("click", () => {
        const emails = emailInput.value.trim();

        // Check if the input is empty
        if (!emails) {
            statusP.textContent = "Please enter one or more email addresses separated by commas.";
            resultDiv.classList.remove("hidden");
            return;
        }

        // Make a request to the Disify API
        fetch(`https://www.disify.com/api/email/${emails}/mass`)
            .then((response) => response.json())
            .then((data) => {
                resultDiv.classList.remove("hidden");
                if (data.valid) {
                    if (data.disposable) {
                        statusP.textContent = "These are disposable email addresses.";
                        statusP.style.color = "red";
                    } else {
                        statusP.textContent = "These are valid email addresses.";
                        statusP.style.color = "green";
                    }
                } else {
                    statusP.textContent = "These are not valid email addresses.";
                    statusP.style.color = "red";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
