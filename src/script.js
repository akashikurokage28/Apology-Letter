const textPlaceholder = document.querySelector(".text-placeholder");
const letterArr = [
    "Dear Joyce Cagang Saraza,",
    "",
    "First of all, gusto kong humingi ng sorry nagsaktan ko at nasira ko ang pagtitiwala mo sakin.",
    "I just want to be supportive and becoming your outlet for your overflowing emotions but,",
    "I BETRAYED YOUR FEELINGS.",
    "",
    "I want you to know that I don’t mean to make you feel abandoned.",
    "All of my words, weird smiles, and stuttering words.",
    "THOSE ARE MY ENCOURAGEMENT FOR YOU.",
    "Or as I thought…",
    "",
    "Let’s start with the beginning of my journey with you.",
    "",
    "I was too happy that I can’t produce any words nor sounds when you said you trust everything with you.",
    "You we’re too colorful that I can’t see anything except you.",
    "",
    "All I need is you.",
    "I need your cute smile,",
    "I need your presence,",
    "I need your sympathy,",
    "I need your love,",
    "I need your care,",
    "And I need everything.",
    "",
    "I promised that I will do everything what makes you happy.",
    "I promised that I take care of you.",
    "I promised to stay by your side no matter what happened and,",
    "I promised to be strong when the rain comes in our life but I realized,",
    "",
    "I ALREADY BETRAYED YOU.",
    "",
    "Everything in our relationship was changing too fast after I decided to changed myself.",
    "Our sparks.",
    "Our Butterflies in our stomach.",
    "Our Excitement.",
    "Our surprises once we expecienced,",
    "WE’RE DISAPPEARED.",
    "",
    "Even these things were disappeared,",
    "I will always choose you no matter what because I really loved you since that day.",
    "",
    "October 27, 2025",
    "The date where I was to celebrate our 1st monthsary tomorrow.",
    "I was too excited how to celebrate it with our monthsary with you.",
    "How going to surprise you without any expensive materials,",
    "How can I give your best day to spend with me?",
    "",
    "Everything was already on paper.",
    "Planned and ready to write.",
    "Everything was fine until we came to our biggest fear and struggles.",
    "",
    "OUR FIRST UNEXPECTED STRUGGLE.",
    "",
    "You broke down into pieces, saying that you want to give up.",
    "My mind becomes blank and fill it with fear after you committed suicide in front of my eyes.",
    "",
    "I was feel weak,",
    "Powerless,",
    "Emotionless,",
    "And Stupid.",
    "",
    "I was telling to myself",
    "Do I really deserve you?",
    "Do I really make you happy?",
    "Do I really do the things that make you excited the most?",
    "Do I really take care of you as my Queen?",
    "",
    "We survived the storm but it leaves me a lot of question marks in my mind but there’s one thing I realized.",
    "",
    "I WAS TOO CLUELESS.",
    "CARELESS.",
    "AND LACK OF EMOTIONS.",
    "",
    "November 17, 2025",
    "",
    "The day we’re we plan how to survive our second storm in our life.",
    "I thought if I make you noticed myself strong and bold,",
    "It will ease the pain you feel.",
    "You will share the burden you carry to me.",
    "And face our problem with no fear.",
    "",
    "BUT IT WASN’T IN THIS CASE.",
    "",
    "I made you feel abandoned,",
    "I made you feel betrayed and,",
    "I remind you of your past trauma because of my action.",
    "",
    "I was confused.",
    "Scared.",
    "And betrayed by myself.",
    "",
    "I just want to you to make you feel strong and, fearless but.",
    "",
    "I CAUSED YOU MORE THAN HARM AND PAIN YOU FELT TODAY.",
    "",
    "I don’t know how to approach you.",
    "What should I reply, that wouldn’t hurt you?",
    "What should I do to avoid the things from getting unclear and blur?",
    "",
    "I thought I can do it but I was still lack of emotions and empathy.",
    "",
    "Joyce Cagang Saraza.",
    "",
    "My cutie wife Akii.",
    "I’m sorry for what I did to you.",
    "I’m sorry if I betrayed you.",
    "I’m sorry if I made you feel alone again.",
    "",
    "I’ll take responsibility for what I did.",
    "I don’t want to give up on you because I’m fucking falling in love with you",
    "EVERY SINGLE DAY.",
    "",
    "No matter what decision you made. I will be the man who respect and cherish your decision.",
    "I’M STILL IN LOVE WITH YOU EVERY SINGLE",
    "",
    "I’M SORRY IF DIDN’T CHERISH THE TRUST YOU GAVE TO ME.",
    "Although it was hurt to my side,",
    "I will still stay by your side no matter what.",
    "Even in my darkness day.",
    "I will never forget the things you experienced to me because I loved you since that day.",
    "I will cherish the memories we created and",
    "You will always my number one person I loved you the most.",
    "",
    "I want to win your trust again.",
    "I want to feel your pain.",
    "I want to comfort you",
    "I want to be with you in your darkness days",
    "",
    "The question is.",
    "WILL YOU STILL ME GIVE ME A CHANCE TO FIX WHAT I ACCIDENTALLY BROKE?",
    "",
    "All of this unspoken word was meant to be written just to explain what I really want.",
    "I WANT TO BE WITH YOU, NO MATTER WHAT HAPPENED.",
    "",
    "I really really mean it.",
    "I want to win your trust again so please.",
    "CAN YOU LET ME IN INTO YOUR PAST?",
    "",
    "I’m not the perfect person to do these things but",
    "PLEASE AKII.",
    "LET ME IN INTO YOUR PAST TRAUMA WITH YOUR PAST EX.",
    "I want to understand what your truly feels like.",
    "Because I feel confused, scared, and hurt at the same time.",
    "I can’t do some things to make you feel safe and sound but",
    "I just want you to comfort and hug your while you’re in pain.",
    "Cause I really fucking loved you akii and you are my…",
    "",
    "FAVORITE LESSON IN MY LIFE.",
    "",
    "Always remember that my love for you never fades no matter what situation we stand.",
    "YOU WILL ALWAYS MY FAVORITE MEMORY AND",
    "MY FIRST PERSON I LOVED THE MOST.",
    "",
    "ILOVEYOUSOOMUCH MY WIFEY AKII.",
    "",
    "Sincerely apologize,",
    "Abdulaziz Casiple Madatel."
];

// Function to show each line with fade-in and fade-out, with delay based on string length
function showLetterLines(arr, placeholder) {
	let idx = 0;
	function showNext() {
		if (idx >= arr.length) return;
		placeholder.textContent = arr[idx];
		placeholder.classList.remove("fade-out");
		placeholder.classList.add("fade-in");

		// Calculate delay: base + (length * factor) in ms
		const base = 1000; // 1s base
		const perChar = 50; // 50ms per character
		const delay = base + arr[idx].length * perChar;

		setTimeout(() => {
			placeholder.classList.remove("fade-in");
			placeholder.classList.add("fade-out");
			setTimeout(() => {
				idx++;
				showNext();
			}, 1000); // match fade-out duration in CSS
		}, delay);
	}
	showNext();
}


// start automatically when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => showLetterLines(letterArr, textPlaceholder));
} else {
    showLetterLines(letterArr, textPlaceholder);
}