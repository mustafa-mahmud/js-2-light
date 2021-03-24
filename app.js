'use strict';

//1::
const img = document.querySelector('img');
const btn = document.querySelector('button');
const body = document.body;

//3::
function onOff() {
  let btnStatus = btn.textContent;
  console.log(btnStatus);
  if (btnStatus === 'ON') on();
  if (btnStatus === 'OFF') off();
}

function on() {
  img.src = 'img/lightOn.gif';
  btn.textContent = 'OFF';
  body.classList.add('light');
}

function off() {
  img.src = 'img/lightOff.gif';
  btn.textContent = 'ON';
  body.classList.remove('light');
}

//2::
btn.addEventListener('click', onOff);
