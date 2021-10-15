/*
1. Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando
recursividad.
*/

function tabla(N)
{
    let cantidad = 11;
    for(let i = 1; i < cantidad; i++)
    {
        console.log(N + " x " + i + " = "+ (N * i ));
    }
}
tabla(9);

