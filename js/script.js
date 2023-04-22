const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

window.addEventListener('scroll', () => {
  mobileMenu.classList.remove('active');
});

// RENDER SPEAKER
const speakers = [
  {
    name: 'Brendan Eich',
    title: 'President of Young Pirates of Europe    ',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    patternImg: './images/speakers/chess-box-pattern.jpg',
    speakerImg: './images/speakers/Brendan_Eich.jpg',
  },
  {
    name: 'Brendan Eich',
    title: 'President of Young Pirates of Europe    ',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    patternImg: './images/speakers/chess-box-pattern.jpg',
    speakerImg: './images/speakers/Dennis_Ritchie.jpg',
  },
  {
    name: 'Brendan Eich',
    title: 'President of Young Pirates of Europe    ',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    patternImg: './images/speakers/chess-box-pattern.jpg',
    speakerImg: './images/speakers/Larry_Page.jpg',
  },
  {
    name: 'Brendan Eich',
    title: 'President of Young Pirates of Europe    ',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    patternImg: './images/speakers/chess-box-pattern.jpg',
    speakerImg: './images/speakers/Radia-Perlman.jpg',
  },
  {
    name: 'Brendan Eich',
    title: 'President of Young Pirates of Europe    ',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    patternImg: './images/speakers/chess-box-pattern.jpg',
    speakerImg: './images/speakers/Margaret_Hamilton.jpg',
  },
  {
    name: 'Brendan Eich',
    title: 'President of Young Pirates of Europe    ',
    description: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    patternImg: './images/speakers/chess-box-pattern.jpg',
    speakerImg: './images/speakers/ken_thompson.jpg',
  },
];

const renderSpeakerEl = (speaker) => `<div class="speaker">
  <div class="img-box">
    <img
      src="${speaker.patternImg}"
      class="pattern-img"
      alt=""
    />
    <img
      src="${speaker.speakerImg}"
      class="speaker-img"
      alt=""
    />
  </div>
  <div class="content-box">
    <h4 class="author">${speaker.name}</h4>
    <p class="title">${speaker.title}</p>
    <span class="underline2"></span>
    <p class="content-text">
      ${speaker.description}
    </p>
  </div>
  </div>`;

const speakersContainer = document.querySelector('.speakers');

window.onload = () => {
  speakers.forEach((speaker) => {
    speakersContainer.innerHTML += renderSpeakerEl(speaker);
  });
  speakersContainer.innerHTML += '<button class="more-btn"><span>MORE</span></button>';
};
