function saludar(nombre)
{
    return `Hola como estas ${nombre}`;
}

const saludar2 = function(nombre){
    return `Hola como estas ${nombre}`
}

const saludar3 = (nombre) => {

    return `Hola como estas ${nombre}`
}

function llamarFuncionParaSaludar(fn, parametro)
{
    console.log(fn(parametro));
}

llamarFuncionParaSaludar(saludar2,"Rommel");
