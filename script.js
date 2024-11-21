document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("scenario1-form");
    
    // Function to update the total price
    function updateTotal() {
        let totalPrice = 0;

        // Loop through all the radio buttons and calculate the total price
        const selectedFurniture = document.querySelector('input[name="furniture"]:checked');
        const selectedTech = document.querySelector('input[name="tech"]:checked');
        const selectedClassroom = document.querySelector('input[name="classroom"]:checked');

        if (selectedFurniture) {
            totalPrice += parseFloat(selectedFurniture.getAttribute("data-price"));
        }
        if (selectedTech) {
            totalPrice += parseFloat(selectedTech.getAttribute("data-price"));
        }
        if (selectedClassroom) {
            totalPrice += parseFloat(selectedClassroom.getAttribute("data-price"));
        }

        // Display the total price
        document.getElementById("total").textContent = totalPrice.toFixed(2);

        // Change total price text color based on value
        const totalElement = document.getElementById("total-price");
        if (totalPrice > 2500) {
            totalElement.classList.add('red');
            totalElement.classList.remove('yellow', 'green');
        } else if (totalPrice > 2300) {
            totalElement.classList.add('yellow');
            totalElement.classList.remove('red', 'green');
        } else {
            totalElement.classList.add('green');
            totalElement.classList.remove('red', 'yellow');
        }
    }


    // Add event listeners to update the total when any radio button is clicked
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', updateTotal);
    });

    // Form submission event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form submission

        // Ensure all required fields are selected
        const selectedFurniture = document.querySelector('input[name="furniture"]:checked');
        const selectedTech = document.querySelector('input[name="tech"]:checked');
        const selectedClassroom = document.querySelector('input[name="classroom"]:checked');
        const reasoning = document.querySelector('textarea[name="reasoning"]').value;

        if (selectedFurniture && selectedTech && selectedClassroom && reasoning) {
            // If all selections are made and reasoning is filled, move to the next page
            window.location.href = 'scenario2.html';  // Redirect to Scenario 2 page
        } else {
            alert('Please select a product from each category and provide reasoning!');
        }
    });
});
