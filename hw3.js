document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailField = document.getElementById("email");
    const ageField = document.getElementById("age");
    const birthdayField = document.getElementById("birthday");
    const commentsField = document.getElementById("comments");
    const charCount = document.createElement("p");
    
    // 🎯 Auto-fill today's date in birthday field
    const today = new Date().toISOString().split("T")[0];
    birthdayField.value = today;

    // 🔢 Add character count below comments field
    charCount.textContent = "Characters: 0/200";
    commentsField.parentNode.appendChild(charCount);

    commentsField.addEventListener("input", function () {
        const maxChars = 200;
        const currentLength = commentsField.value.length;
        
        if (currentLength > maxChars) {
            commentsField.value = commentsField.value.substring(0, maxChars);
        }
        
        charCount.textContent = `Characters: ${commentsField.value.length}/${maxChars}`;
    });

    // 🚨 Form validation with error messages
    form.addEventListener("submit", function (event) {
        let errors = [];

        // Validate email
        if (!emailField.value.includes("@")) {
            errors.push("⚠️ Please enter a valid email address.");
        }

        // Validate age
        const age = parseInt(ageField.value, 10);
        if (isNaN(age) || age < 1 || age > 150) {
            errors.push("⚠️ Age must be between 1 and 150.");
        }

        // Display errors if any
        if (errors.length > 0) {
            alert(errors.join("\n"));
            event.preventDefault(); // Stops form submission
        }
    });

    // ✅ Highlight selected favorite food
    document.querySelectorAll('input[name="favorite-food"]').forEach((radio) => {
        radio.addEventListener("change", function () {
            alert("You selected: " + this.value);
        });
    });

    // ✅ Log selected favorite thing
    document.querySelectorAll('input[name="favorite-thing"]').forEach((radio) => {
        radio.addEventListener("change", function () {
            console.log("Favorite thing selected:", this.value);
        });
    });

    // ✅ Ensure random checkbox stays checked after 3 seconds
    setTimeout(() => {
        document.getElementById("random-checkbox").checked = true;
    }, 3000);
});

