// Igor B.
// http://github.com/bogeta11040

let sentence = document.querySelector('#sentence');
let res = document.querySelector('#result');
let submitBtn = document.querySelector('#submitbtn');
let resetBtn = document.querySelector('#resetbtn');

submitBtn.addEventListener('click', makeResult);
resetBtn.addEventListener('click', resetText);

function titleCase(str) {
let regex = /(\w*)'?(\w)/gi;
let o = [];
let p = str.match(regex);


for (let i = 0; i < p.length; i++) {
  o.push(p[i][0].toUpperCase() + p[i].slice(1).toLowerCase());
}
let result = o.join(" ");
 return result;
}

function makeResult() {
  let str = sentence.value;
  res.value = titleCase(str);
}

function resetText() {
  sentence.value = "";
  res.value = "";
}
