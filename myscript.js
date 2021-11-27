var questions = [
  "If you had a soundtrack for your life, what 3 songs you pick?",
  "When was the last time you cried? ",
  "What did you dream about when you were younger that is part of your life now?",
  "What are you looking forward to in the next 3 months? ",
  "Describe yourself or someone in your life in 4 words. The other player has to guess the relationship (brother, mom, friend, uncle, you, etc.).",
  "Staring contest.",
  "Sit closer.",
  "Play the next 2 prompts facing away from each other.",
  "Say something that you love/hate. Other player has to guess if you love or hate it. ",
  "Exchange phones and text something fun to the other player's person of choice. ",
  "Take a photo together. ",
  "Play the next 2 prompts standing up. ",
  "What quality do you enjoy about the other person? ",
  "Play the next 2 prompts in a whisper. (shhh!) ",
  "Describe 2 parts of your ideal date. ",
  "Set a timer for 3 minutes. Write a note to each other and fold it. You can only read it when the game is over.",
  "Make a secret handshake.",
  "Give the other person a pen tattoo.",
  "Share a happy memory",
  "Describe each other as a food dish",
  "Switch seats.",
  "Move to a new location.",
  "Play rock paper scissors. The winner has to plan the next hangout activity",
  "What is your favorite dessert?",
  "Describe a life goal of yours that is not related to school or work.",
  "Play rock paper scissors. The loser has to share an embarrassing story.",
  "What name would suit the other person? Both players play.",
  "Set a timer for 30 seconds. Draw the other person.",
  "What is your favorite part about today?",
  "What activity would be fun to do with the other person?",
  "Share something that excites you!",
  "What is something you have been working to get better at?",
  "Describe (2) simple pleasures in your life.",
  "Describe something you are grateful for.",
  "Each player has to add a new prompt to the game.",
  "What is (1) thing you want for Christmas?",
  "Play the next (2) prompts with your eyes closed. The other player reads your prompts.",
  "Set a timer for 1 minute. Look into each others eyes. Don't talk!",
  "Switch seats.",
  "What is something cool thats happened to you this week?",
  "Share (2) thoughts you had recently.",
  "Use (3) words to describe your favorite food. The other person has (2) tries to guess what it is.",
  "Describe each other with a picture.",
  "What kind of person are you trying to be?",
];
var stillPlaying = true;
function updateQuestion() {
  if (stillPlaying) {
    var questionNumber = Math.floor(Math.random() * questions.length);
    console.log(questionNumber);
    document.getElementById(
      "question"
    ).innerHTML = `${questions[questionNumber]}`;
    questions.pop();
    document.getElementById("counter").innerHTML = `${questions.length} ${
      questions.length == 1 ? "question" : "questions"
    } left.`;

    document.getElementById("button").innerHTML = `Next Question`;

    if (questions.length == 0) {
      stillPlaying = false;
      document.getElementById("button").innerHTML = `Finish`;
    }
  } else {
    document.getElementById("question").innerHTML =
      "Credit to Austin Doan for creating the questions. Thanks for playing!";

    document.getElementById("counter").innerHTML = `${questions.length} ${
      questions.length == 1 ? "question" : "questions"
    } left.`;
  }
}
