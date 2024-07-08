const correctAnswers = {
    mcq1: "LAN",
    mcq2: "Hypertext Transfer Protocol",
    mcq3: "A network security system",
    mcq4: "Phishing",
    mcq5: "Virtual Private Network",
    fitb1: "Router",
    fitb2: "Network security",
    fitb3: "Firewall",
    fitb4: "WAN",
    fitb5: "Wi-Fi",
    tf1: "True",
    tf2: "True",
    tf3: "True",
    tf4: "True",
    tf5: "True",
    mcq6: "Database management",
    mcq7: "Number",
    mcq8: "A unique identifier for a record",
    mcq9: "Data entry",
    mcq10: "Query",
    fitb6: "Table",
    fitb7: "Query",
    fitb8: "Primary key",
    fitb9: "Form",
    fitb10: "Report",
    tf6: "False",
    tf7: "False",
    tf8: "True",
    tf9: "False",
    tf10: "True",
    mcq11: "Report",
    mcq12: "To print data in a structured format",
    mcq13: "An object used to store data",
    mcq14: "Using the Report Wizard",
    mcq15: "Design View",
    fitb11: "Design View",
    fitb12: "Datasheet",
    fitb13: "Report Wizard",
    fitb14: "Report",
    fitb15: "Primary",
    tf11: "False",
    tf12: "True",
    tf13: "True",
    tf14: "True",
    tf15: "True"
};

function submitQuiz() {
    const form = document.getElementById("quizForm");
    const formData = new FormData(form);
    let score = 0;
    let totalQuestions = 45; // 15 MCQs + 15 fill in the blanks + 15 true/false

    for (const [key, value] of formData.entries()) {
        if (correctAnswers[key] && correctAnswers[key].toLowerCase() === value.toLowerCase()) {
            score++;
        }
    }

    document.getElementById("result").innerHTML = `You got ${score} out of ${totalQuestions} correct.`;
}
