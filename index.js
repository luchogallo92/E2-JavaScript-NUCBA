const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Resolucion de ejercicios

//Ejercicio 1 pizzas con numero par e impar

const NrosPares = pizzas.filter ( (numero) => {
  return numero.id % 2 === 0 
})

const NrosImpares = pizzas.filter ((numero) => {
  return numero.id % 2 === 1 
})

NrosPares.forEach ( (numero) => {
  console.log(` Los productos que tienen id con numero par son ${numero.nombre}`);
})

NrosImpares.forEach ( (numero) => {
  console.log(` Los productos que tienen id con numero impar son ${numero.nombre}`);
})


// Ejercicio 2 pizzas menos de 600

const menosDe600 = pizzas.filter ((producto) => {
  return producto.precio < 600
}) 

menosDe600.forEach(producto => {
  console.log(` La pizza que vale menos de $600 es la ${producto.nombre}`);
});

// Ejercicio 3 pizzas con su respectivo precio

const InfoPizzasYNombre = pizzas.filter ((producto) => {
  return producto.nombre && producto.precio 
})

InfoPizzasYNombre.forEach ((producto) => {
  console.log(` La ${producto.nombre} tiene un valor de $ ${producto.precio}`);
});

// Ejercicio 4 Ingredientes de cada pizza

const IngredientesDePizzas = pizzas.filter ((producto) => {
  return producto.ingredientes
})

IngredientesDePizzas.forEach ((producto) => {
  console.log (`los ingredientes de la ${producto.nombre} son ${producto.ingredientes}`)
})

