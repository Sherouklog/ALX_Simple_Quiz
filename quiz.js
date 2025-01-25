// Function to check the answer
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Element to display feedback
    const feedbackElement = document.getElementById("feedback");

    // Check if the user selected an answer
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected option

        // Compare user answer with the correct answer and display appropriate feedback
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Set feedback color to green
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Set feedback color to red
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange"; // Set feedback color to orange
    }
}

// Add event listener to the Submit Answer button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);