// Ejercicio 2 de DOM

// Bloque 1
const vacio = document.createElement('div')
document.body.appendChild(vacio)

// Bloque 2
const parrafodiv = document.createElement('div')
const parrafo = document.createElement('p')
parrafo.textContent = 'Este es un párrafo dentro de un div'
parrafodiv.appendChild(parrafo)
document.body.appendChild(parrafodiv)

// Bloque 3
const parrafoseis = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Este es el párrafo ${i}`
  parrafoseis.appendChild(p)
}
document.body.appendChild(parrafoseis)

// Bloque 4
const parrafodinamico = document.createElement('p')
parrafodinamico.textContent = 'Soy dinámico!'
document.body.appendChild(parrafodinamico)

// Bloque 5
const h2 = document.querySelector('.fn-insert-here')
if (h2) h2.textContent = 'Wubba Lubba dub dub'

// Bloque 6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// Bloque 7
const removeNode = document.querySelectorAll('.fn-remove-me')
removeNode.forEach((nodo) => nodo.remove())

// Bloque 8
const parrafomedio = document.querySelectorAll('div')
if (parrafomedio.length >= 2) {
  const pMedio = document.createElement('p')
  pMedio.textContent = 'Voy en medio!'
  parrafomedio[0].parentNode.insertBefore(pMedio, parrafomedio[1])
}

// Bloque 9
const parrafodentro = document.querySelectorAll('.fn-insert-here')
parrafodentro.forEach((div) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
})
