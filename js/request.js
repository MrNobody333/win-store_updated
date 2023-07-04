const root = document.querySelector('.feedback__root');
const loader = document.querySelector('.loader.loader_active');
const btn = document.querySelector('.more__feedback');
let count = 5;

btn.disabled = 'true';
btn.style.pointerEvents = 'none';

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', getData);
window.addEventListener('load', sendRequest);
btn.addEventListener('click', () => sendRequest(count += 5));

function getData() {
  const reviews = JSON.parse(xhr.response).review;

  loader.classList.remove('loader_active');
  btn.disabled = false;
  btn.style.pointerEvents= '';
  root.innerHTML = '';
  
  reviews.forEach(review => {
    const div = document.createElement('div');
    div.className = 'feedbacks';
    const h2 = document.createElement('h2');
    h2.className = 'feedbacks__title';
    h2.textContent = `${review.name}`;
    const span = document.createElement('span');
    span.className = 'feedbacks__date';
    span.textContent = `${review.date}`;
    const p = document.createElement('p');
    p.className = 'feedbacks__text';
    p.textContent = `${review.info}`;
    root.append(div);
    
    for (let i = 0; i < 5; i++) {
      const img = document.createElement('img');
      img.className = 'star';
      img.src = "images/star.svg";
      img.alt = "star";
      div.append(img);
      // const svg = document.createElement('svg');
      // svg.className = 'stars';
      // const use = document.createElement('use');
      // use.setAttributeNS('w3.org/1999/xlink', 'href', 'sprite.svg#star')
      // svg.append(use);
      // div.append(svg);
    }

    div.append(h2);
    div.append(span);
    div.append(p);
  });
}

function sendRequest() {
  xhr.open('GET', `https://api.digiseller.ru/api/reviews?seller_id=1046704&type=good&rows=${count}`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}