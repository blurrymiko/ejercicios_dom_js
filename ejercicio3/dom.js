// Ejercicio 3 de DOM

// Bloque 1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const listacountries = document.createElement('ul')

for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  listacountries.appendChild(li)
}
document.body.appendChild(listacountries)

// Bloque 2
const eliminarElemento = document.querySelector('.fn-remove-me')
if (eliminarElemento) {
  eliminarElemento.remove()
}

// Bloque 3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printcars = document.querySelector('[data-function="printHere"]')

const listacoches = document.createElement('ul')
for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  listacoches.appendChild(li)
}
printcars.appendChild(listacoches)

// Bloque 4
const countryCards = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const ccdiv = document.createElement('div')
ccdiv.classList.add('card-container')

for (const card of countryCards) {
  const countrycarddiv = document.createElement('div')
  countrycarddiv.classList.add('card')

  const title = document.createElement('h4')
  title.textContent = card.title

  const img = document.createElement('img')
  img.src = card.imgUrl

  // Bloque 6 (previo al apartado 5 para no generar botones adicionales de Eliminar último div)
  const botonborrar = document.createElement('button')
  botonborrar.textContent = 'Eliminar este div'
  botonborrar.addEventListener('click', () => {
    countrycarddiv.remove()
  })

  countrycarddiv.appendChild(title)
  countrycarddiv.appendChild(img)
  countrycarddiv.appendChild(botonborrar)
  ccdiv.appendChild(countrycarddiv)
}

document.body.appendChild(ccdiv)

// Bloque 5
const borrardivs = document.createElement('button')
borrardivs.textContent = 'Eliminar último div'
borrardivs.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card')
  if (cards.length > 0) {
    cards[cards.length - 1].remove()
  }
})
document.body.appendChild(borrardivs)
