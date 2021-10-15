
const dishes = 
[
    "encebollado",
    "tigrillo",
    "bolon",
    "sanduche",
    "cevivhe"
]

const anotherdish = [

    "Arroz con pollo",
    "Tonga",
    "Guata con lengua"
]

const uniondishes = [ ...dishes, ...anotherdish]
console.log(uniondishes)
console.log(dishes.includes("arroz con pollo"));