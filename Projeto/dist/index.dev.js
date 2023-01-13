"use strict";

var btn = document.querySelector('#verSenha');
btn.addEventListener('click', function () {
  var inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});
var btnconf = document.querySelector('#verSenha1');
btnconf.addEventListener('click', function () {
  var confirmSenha = document.querySelector('#senha1');

  if (confirmSenha.getAttribute('type') == 'password') {
    confirmSenha.setAttribute('type', 'text');
  } else {
    confirmSenha.setAttribute('type', 'password');
  }
});