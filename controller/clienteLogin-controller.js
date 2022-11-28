const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('blur', (evento) => {
    validaInput(evento.target)
  })
})