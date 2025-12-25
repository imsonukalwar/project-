const quotes = [
"Beauty begins the moment you decide to be yourself.",
"Wherever life plants you, bloom with grace.",
"You are stronger than you think and more beautiful than you know.",
"Happiness looks gorgeous on you.",
"Let your soul shine brighter than your fears.",
"Every day may not be good, but there is something good in every day.",
"Be your own kind of beautiful.",
"You are a work of art in progress.",
"Radiate kindness, it never goes out of style.",
"Your vibe attracts your tribe.",
"Dream big, sparkle more, shine bright.",
"Stars can't shine without darkness.",
"A beautiful heart shines brighter than a beautiful face.",
"Be fearless in the pursuit of what sets your soul on fire.",
"Turn your wounds into wisdom.",
"Bloom where you are planted.",
"The most beautiful things in the world cannot be seen, they are felt with the heart.",
"Everything has beauty, but not everyone sees it.",
"Be the reason someone smiles today.",
"Your life is as beautiful as your mindset."
];
const button = document.querySelector('button');
const h1=document.querySelector('h1')

button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * quotes.length);
h1.textContent = quotes[index];
});