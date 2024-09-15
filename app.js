const h1_tag = document.querySelector('#demo')

// Tag daxilinde olan textleri ashagidaki kimi gotururuk

console.log(h1_tag.innerText);
console.log(h1_tag.textContent);
console.log(h1_tag.innerHTML);

// Tag daxilindeki butun elementleri gormek uchun (innerHtml)
const div_tag = document.querySelector('.wrapper');
console.log(div_tag.innerHTML);

// Dizayn - classList .add .remove .toggle
const p_tag = document.querySelector('#memo');
// p_tag.classList.add('hakuna');
// p_tag.classList.remove('hakuna');
p_tag.classList.toggle('hakuna');



