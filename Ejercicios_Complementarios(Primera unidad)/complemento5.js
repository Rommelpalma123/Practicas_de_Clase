/*5. Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en
mayúscula.*/

const favorite_dish = 
[
    'Res Asada','Pollo Asado','Ceviche','Encebollado','Arroz Colorado'
]
favorite_dish.forEach( favorite_dish => {
    
    console.log(favorite_dish.toUpperCase());

});