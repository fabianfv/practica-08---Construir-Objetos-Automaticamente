function Coche(marca, modelo, antiguedad, color, puertas) {
  this.marca = marca
  this.modelo = modelo
  this.antiguedad = antiguedad
  this.color = color
  this.puertas = puertas

  this.obt_marca = () => this.marca
  this.obt_modelo = () => this.modelo
  this.obt_antiguedad = () => this.antiguedad
  this.obt_color = () => this.color
  this.obt_puertas = () => this.puertas

  this.toString = (newline) =>
    `Marca: ${this.marca}${newline}Modelo: ${this.modelo}${newline}Antigüedad: ${this.antiguedad}${newline}Color: ${this.color}${newline}Puertas: ${this.puertas}`
}

function num_aleatorio(min, max) {
  return Math.round(Math.random() * max + min)
}

function marca_aleatoria() {
  const marcas = [
    "Renault","Fiat","Peugeot","Ferrari","Lamborghini","Ford","Chevrolet",
    "BMW","Citroen","Volswagen","Toyota","Rolls Royce","Mercedes Benz"
  ]
  return marcas[num_aleatorio(0, marcas.length - 1)]
}

function modelo_aleatorio() {
  const letras = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
  let letra1 = letras[num_aleatorio(0, letras.length - 1)]
  let num1 = num_aleatorio(48, 57)
  let letra2 = letras[num_aleatorio(0, letras.length - 1)]
  let num2 = num_aleatorio(48, 57)
  return letra1 + num1 + letra2 + num2
}

function color_aleatorio() {
  const colores = ["rojo", "azul", "verde", "negro", "blanco", "gris", "amarillo", "naranja", "dorado"]
  return colores[num_aleatorio(0, colores.length - 1)]
}

function coche_simulado() {
  const marca = marca_aleatoria()
  const modelo = modelo_aleatorio()
  const antiguedad = num_aleatorio(0, 30)
  const color = color_aleatorio()
  const puertas = num_aleatorio(2, 5)

  return new Coche(marca, modelo, antiguedad, color, puertas)
}

const coches = []

function crear_coches() {
  for (let i = 1; i <= 10; i++) {
    coches.push(coche_simulado())
  }
}

function mostrar_coches() {
  for (coche of coches) {
    console.log(`\nDatos del coche\n${"-".repeat(15)}\n${coche.toString("\n")}\n`)
    document.writeln(`Datos del coche<br>${"-".repeat(15)}<br>${coche.toString("<br>")}`)
  }
}

crear_coches()

mostrar_coches()