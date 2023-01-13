let btn = document.querySelector('#verSenha')
btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

let btnconf = document.querySelector('#verSenha1')
btnconf.addEventListener('click', ()=>{
  let confirmSenha = document.querySelector('#senha1')
  
  if(confirmSenha.getAttribute('type') == 'password'){
    confirmSenha.setAttribute('type', 'text')
  } else {
    confirmSenha.setAttribute('type', 'password')
  }
})

