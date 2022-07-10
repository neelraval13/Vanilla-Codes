const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './img/drink.jpeg',
        text: "I'm Thirsty"
    },
    {
        image: './img/food.jpeg',
        text: "I'm Hungry"
    },
    {
        image: './img/tired.jpeg',
        text: "I'm Tired"
    },
    {
        image: './img/hurt.jpeg',
        text: "I'm Hurt"
    },
    {
        image: './img/happy.jpeg',
        text: "I'm Happy"
    },
    {
        image: './img/angry.jpeg',
        text: "I'm Angry"
    },
    {
        image: './img/sad.jpeg',
        text: "I'm Sad"
    },
    {
        image: './img/scared.jpeg',
        text: "I'm Scared"
    },
    {
        image: './img/outside.jpeg',
        text: "I Want To Go Outside"
    },
    {
        image: './img/home.jpeg',
        text: "I Want To Go Home"
    },
    {
        image: './img/school.jpeg',
        text: "I Want To Go To School"
    },
    {
        image: './img/grandma.jpeg',
        text: "I Want To Go To Grandmas"
    }
];

data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');
    const { image, text } = item;
    box.classList.add('box');

    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
    `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });

    main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();

let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voicesSelect.appendChild(option);
    });
}

function setTextMessage(text) {
    message.text = text;
}

function speakText() {
    speechSynthesis.speak(message);
}

function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}

speechSynthesis.addEventListener('voiceschanged', getVoices);

toggleBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.toggle('show')
);

closeBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.remove('show')
);

voicesSelect.addEventListener('change', setVoice);

readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});

getVoices();