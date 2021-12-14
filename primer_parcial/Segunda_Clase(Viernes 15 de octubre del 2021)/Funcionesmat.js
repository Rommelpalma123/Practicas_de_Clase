function operacion( n1, n2, operacion) 
{
    switch (operacion) {
        case "sumar":
            return n1 + n2;
            break;

        case "restar":
            return n1 - n2;
            break;

        case "multiplicar":
            return (n1 * n2);
            break;

        case "dividir":
            return (n1 / n2);
            break;

        default:
            return 0;
            break;
    }
}

function saludar (nombre) {
    return `Hola como estas ${nombre}`;
}
/*exporto modulos de un sector a otro es decir de un archivo a otro*/
module.exports = {
    saludar: saludar,
    funcion: operacion
}

