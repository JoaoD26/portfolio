"use strict";

var btn = document.querySelector('.fa-eye');
btn.addEventListener('click', function () {
  var inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});