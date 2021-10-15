/*5. Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en
mayúscula.*/

const favorite_dish = 
[
    'Res Asada','Pollo Asado','Ceviche','Encebollado','Arroz Colorado'
]

favorite_dish.forEach(function (el, index) {

    console.log(`${index} ${el}`);
    
});

function cambiarMinusculaMayuscula(favorite_dish) {
    if (typeof favorite_dish === 'string') {
        let contadorMinusculas = 0;
        let contadorMayusculas = 0;

        for(let i = 0; i < favorite_dish.length; ++i) {
            if(/[a-z]/.test(favorite_dish[i])) {
                ++contadorMinusculas;
            } else {
                ++contadorMayusculas;
            }
        }

        if (contadorMinusculas > contadorMayusculas) {
            return favorite_dish.toLowerCase();
        } else {
            return favorite_dish.toUpperCase();
        }
    } else {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
}

try {
    console.log(cambiarMinusculaMayuscula('PyTHoN'));  
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cambiarMinusculaMayuscula('pythON'));   //  python
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cambiarMinusculaMayuscula(10001));   //  Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}



