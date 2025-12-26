const zodiacSigns = [
"Aries",
"Taurus",
"Gemini",
"Cancer",
"Leo",
"Virgo",
"Libra",
"Scorpio",
"Sagittarius",
"Capricorn",
"Aquarius",
"Pisces",
];

//complement
const compliments = [
"You are amazing",
"Your smile brightens any room",
"You are stronger than you think",
"You bring positive energy",
"Your ideas are brilliant",
"You are hardworking",
"You are kind-hearted",
"You learn fast",
"You inspire others",
"You are creative",
"You are unique",
"You have great potential",
"You make things better",
"You are confident",
"You never give up",
"You are reliable",
"You are talented",
"You are improving every day",
"You are thoughtful",
"You deserve success",
"You handle challenges well",
"You are courageous",
"You make people happy",
"You have a beautiful mind",
"You are respectful",
"You are smart and capable",
"You are a problem solver",
"You are focused",
"You are valuable",
"You are amazing just as you are",
"You are destined for greatness"
];

//complement
const victimCardCompliments = [
"You have survived so much and you're still standing",
"Your strength is inspiring",
"You deserve peace and happiness",
"What you went through does not define you",
"You handled everything with courage",
"You are stronger than your pain",
"You deserve kindness and love",
"Your feelings are valid",
"You are not alone anymore",
"You are healing and growing every day",
"You have a resilient heart",
"You did your best and that's enough",
"You deserve better and you will get it",
"Your story matters",
"You have a brave soul",
"You are important and valued",
"You didn’t give up and that makes you powerful",
"You are worthy of respect",
"Better days are coming for you",
"Your journey will inspire others"
];

//recommendation
const recommendations = [
"Take care of your mental health first",
"Stay consistent with your goals",
"Practice gratitude every day",
"Surround yourself with positive people",
"Learn something new daily",
"Believe in your abilities",
"Take small steps but keep moving",
"Stay patient, good things take time",
"Focus on progress not perfection",
"Trust the process",
"Be kind to yourself",
"Keep improving your skills",
"Stay disciplined",
"Take breaks when needed",
"Communicate your feelings honestly",
"Work hard but also rest well",
"Learn from your past not suffer from it",
"Stay humble and grounded",
"Help others whenever you can",
"Spend time with family",
"Keep your mindset positive",
"Face challenges bravely",
"Take responsibility for your growth",
"Stay motivated and inspired",
"Avoid negativity",
"Believe that you deserve good things",
"Dream big and work for it",
"Focus on what you can control",
"Celebrate your small wins",
"Never stop learning"
];

//future prediction 
const futurePredictions = [
"You will achieve something you’ve been dreaming of",
"A positive change is coming in your life",
"You will meet someone who will inspire you",
"Your hard work will soon pay off",
"A new opportunity will open doors for you",
"You will gain more confidence in yourself",
"Your financial situation will improve",
"You will discover a hidden talent",
"You will receive unexpected good news",
"Your relationships will become stronger",
"You will find peace from something that bothered you",
"A big success is on its way",
"You will make a decision that changes your life",
"You will travel to a place you always wanted",
"Your health and energy will improve",
"People will appreciate your efforts more",
"You will start something new and exciting",
"Your creativity will increase",
"You will become emotionally stronger",
"Your future is brighter than you imagine"
];

const form =document.getElementById('astroform');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('inp1').value;
    const surnam=document.getElementById('inp2').value;
    const day=document.getElementById('inp3').value;
    const month=document.getElementById('inp4').value;
    const year=document.getElementById('inp5').value;
    const text=`Hi👋 ${name} ${surnam}, your zodiak sign is
    ${zodiacSigns[month-1]}.${compliments[day-1]}.
    ${victimCardCompliments[year%20]}.
    ${recommendations[day*month%30]}.
    ${futurePredictions[(name.length*surnam.length%20)]}`;
    document.getElementById('result').textContent=text;
})