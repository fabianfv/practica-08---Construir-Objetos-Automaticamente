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

  this.toString = () =>
    `Marca: ${this.marca}\nModelo: ${this.modelo}\nAntigüedad: ${this.antiguedad}\nColor: ${this.color}\nPuertas: ${this.puertas}`
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