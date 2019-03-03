import { dictionary } from './data/dictionary.js';
import { listenForPhrases } from './data/data.js';

const SpeechRecognition =
    SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList =
    SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const msg = new SpeechSynthesisUtterance();
msg.lang = 'en-US';

const grammar =
    '#JSGF V1.0; grammar listenForPhrases; public <listenForPhrases> = ' +
    listenForPhrases.join(' | ') +
    ' ;';

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const question = document.querySelector('#question');
const answer = document.querySelector('#answer');

document.body.onclick = () => recognition.start();

recognition.onresult = (event) => {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The [last] returns the SpeechRecognitionResult at the last position.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object

    const last = event.results.length - 1;
    const output = event.results[last][0].transcript.toLowerCase();

    question.textContent = output;

    const eachWord = output.split(' ');

    let person = '';
    let season = '';
    let day = '';
    let trigger = '';

    eachWord.forEach((w) => {
        const found = listenForPhrases.find((e) => e == w);
        if (found) {
            switch (dictionary[found].dataType) {
                case 'person':
                    person = w;
                    break;

                case 'trigger':
                    trigger = w;
                    break;
                case 'season':
                    season = w;
                    break;
                case 'day':
                    day = w;
                    break;
            }
        }
    });

    console.log(person, trigger, season, day);

    if (trigger == 'like' || trigger == 'love' || trigger == 'get') {
        msg.text = dictionary[person].likes;
    }

    window.speechSynthesis.speak(msg);
    answer.textContent = msg.text;

    console.log(`Confidence: ${event.results[0][0].confidence}`);
};

recognition.onspeechend = () => recognition.stop();

recognition.onnomatch = (event) =>
    (question.textContent = 'Error, try asking again.');

recognition.onerror = (event) =>
    (question.textContent = `Error occurred in recognition: ${
        event.error
    }`);
