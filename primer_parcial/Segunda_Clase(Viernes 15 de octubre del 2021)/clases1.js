let prueba ="5";
const persona = {
    nombre:'Rommel Santiago',
    apellido:'Palma Plua',
    estudiante: true,
    prueba: prueba,
    getnamefull(){
        return `${this.nombre} ${this.apellido}`;
    },
    geolocalizacion: {
        lat: 123.23,
        lng: 23.99
    }
}

// se realiza un modificacion de los atributos llamado destructuracion
//const estudiante = { ...persona };
//estudiante.nombre = "Roman";
//console.log(estudiante);
//console.log(persona);

/*desectrucsturacion*/
function mostrarDatos( { nombre, geolocalizacion:{ lat, lng }} ) {

    console.log(nombre);
    console.log(lat);
    console.log(lng); 
}

mostrarDatos(persona);
