/*
1. Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando
recursividad.
*/

// defino una funcion lllamada tabla donde recibe un parametro N
function tabla(N)
{
    // inicio una variable para repetir el numero de veces y donde quiero que se detenga una vez llegada las 11 veces
    let cantidad = 13;
    // Defino otra variable para hacer el recorrido de la variable anterios y poder dar valores con una sentecia for(){}
    for(let i = 1; i < cantidad; i++)
    {
        // Imprimo por consola el valor que le doy a esa ya sea cualquier numero 1 al q desee 
        // la letra x y el signo = apareceran como texto complementario para la tabla
        // por ultimo multiplicamos el valor de N * i donde dara el resultado de esa tabla de multiplicar
        console.log(N + " x " + i + " = "+ (N * i ));
    }
}
tabla(12);

