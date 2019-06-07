// Define variables
$(document).ready(function () {
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // Questions and Answer Arrays
    var question = ["Is an Asian country with no bordering countries?",
        "Is a Nordic country?", "Has a crescent moon on its flag?", "Lies on the Prime Meridian?", "Begins with the letter 'R'?",
        "Has the same name as its capital?", "Was a member of the former Yugoslavia?", "Is a Communist country?"];