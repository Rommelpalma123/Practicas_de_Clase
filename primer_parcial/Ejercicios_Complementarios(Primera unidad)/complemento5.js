/*5. Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en
mayúscula.*/

const favorite_dish = 
[
    'Res Asada','Pollo Asado','Ceviche','Encebollado','Arroz Colorado'
]
// Primero ponemos el arreglo el cual tiene los platos favoritos y ponemos un foreach a comidas faoritas 
favorite_dish.forEach( favorite_dish => {
    
    // Imprimimos por consola los platos favoritos y con la sentencia toUpperCase decimos q todos las letras se muestren en mayuscula
    console.log(favorite_dish.toUpperCase());

});
