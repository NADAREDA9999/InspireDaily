//Array of motivational quotes
const motivationalQuotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t wait for opportunity. Create it."
];

// Function to update motivational quote every 3 seconds
let index = 0;
setInterval(() => {
    document.getElementById("motivationalText").innerText = motivationalQuotes[index];
    index = (index + 1) % motivationalQuotes.length;
}, 3000);

// Task Manager
document.getElementById("addTaskBtn").addEventListener("click", function () {
    const task = prompt("Enter your task:");
    if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        document.getElementById("taskList").appendChild(listItem);
    }
});

// Daily Challenge
document.getElementById("startChallengeBtn").addEventListener("click", function () {
    alert("Today's challenge: Complete one task from your to-do list and celebrate your progress!");
});

// Random Footer Quote
const footerQuotes = [
    "The best way to predict the future is to create it.",
    "Do something today that your future self will thank you for.",
    "Success is the sum of small efforts, repeated day in and day out.",
];
document.getElementById("randomQuoteFooter").innerText = footerQuotes[Math.floor(Math.random() * footerQuotes.length)];