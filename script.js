const textElement = document.getElementById('text');
const inputText = document.getElementById('inputText');
const startButton = document.getElementById('startButton');
let sentences = [];
let currentSentenceIndex = 0;
let scrolling = false;
let interval;

function toggleScroll() {
    if (scrolling) {
        clearInterval(interval);
        startButton.textContent = 'Play';
    } else {
        sentences = inputText.value.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);
        currentSentenceIndex = 0;
        textElement.innerHTML = sentences[currentSentenceIndex];
        interval = setInterval(scrollText, 3000); // Adjust this value to change the interval between sentences
        startButton.textContent = 'Pause';
    }
    scrolling = !scrolling;
}

function scrollText() {
    currentSentenceIndex++;
    if (currentSentenceIndex >= sentences.length) {
        currentSentenceIndex = 0; // Reset to the first sentence
    }
    textElement.innerHTML = sentences[currentSentenceIndex];
}
