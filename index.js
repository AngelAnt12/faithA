const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "My love for you is endless",
    "Without you, I am not complete",
    "I love you",
    "Were perfect for each other",
    "I adore you",
    "You make my smile",
    "One day closer",
    "I cant wait to hold your hands",
    "Well see each other soon",
    "You complete me",
    "You are my soulmate",
    "Im proud to be yours",
    "You make me a better person",
    "I found love when I found you",
    "I think about you 24/7",
    "You inspire me",
    "Want to be yours forever",
    "You make my heart melt",
    "You have my heart",
    "You mean the world to me",
    "I love you more than I did yesterday",
    "Thank god I found you",
    "I love you to the moon and back",
    "To me, you are perfect",
    "You are the sweetest person ever",
    "I will love you Forever",
    "I want you in my life for today, tomorrow and forever.",
    "I will love you till my last breath, no matter what life brings before us!",
    "You are the only reason why I survive why i want to wake up everyday",
    "The more days go, the more I realized how lucky i was to come across you.",
    "I will be your number ONE fan",
    "I wish I was there with you! Sending my love!",
    "Im loving you more each and every day.",
    "Its will always better when were together.",
    "You are the reason for my smile.",
    "I cant wait to see you",
    "Your texts make my day even better.",
    "You make me the happiest person on Earth.",
    "You have no idea the amount of happiness you brought into my life.",
    "I love you like I love my video games. You are really so special!",
    "I would like to fill my calendars with memories of you.",
    "Call me anytime",
    "Distance means so little when someone means so much",
    "cant wait to go on our first date"
    "Thank you for saving my life"
    "You bring happiness into my life",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})