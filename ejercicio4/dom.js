// Ejercicio 4 de DOM

// Bloque 1
const button = document.getElementById('btnToClick')

button.addEventListener('click', function (event) {
  console.log('Evento click:', event)
})

// Bloque 2
const eventfocus = document.querySelector('.focus')

eventfocus.addEventListener('focus', function () {
  console.log('Valor del input FOCUS:', eventfocus.value)
})

// Bloque 3
const eventinput = document.querySelector('.value')

eventinput.addEventListener('input', function () {
  console.log('Valor del input:', eventinput.value)
})

// Bloque 4
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const albumList = document.getElementById('albumList')
for (let album of albums) {
  const li = document.createElement('li')
  li.textContent = album
  albumList.appendChild(li)
}
