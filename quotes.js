const quotes = [
  {
    quote: "우리의 행적이 미래를 결정한다",
    author: "-가렌-",
  },
  {
    quote: "죽거나 죽이거나 약육강식이란 그런거지.",
    author: "-트위치-",
  },
  {
    quote: "오늘밤 사냥을 나선다.",
    author: "-렝가-",
  },
  {
    quote: "훌륭한 판단의 표본이로군.",
    author: "-쉔-",
  },
  {
    quote: "보이지않는 검이 가장 무서운법",
    author: "-제드-",
  },
  {
    quote: "난 목소리 없는 가수요. 다리가 없는 무용수지.",
    author: "-진-",
  },
  {
    quote: "나의검은 당신의 것이오.",
    author: "-마스터이-",
  },
  {
    quote: "삶과 죽음의 순환은 계속된다. 우리는 살것이고 저들은 죽을것이다.",
    author: "-나서스-",
  },
  {
    quote: "모험은 역시 친구랑 같이 해야 신나는법!",
    author: "-누누-",
  },
  {
    quote: "오직 나만이 승리로 이끌수있다",
    author: "-다리우스-",
  },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;