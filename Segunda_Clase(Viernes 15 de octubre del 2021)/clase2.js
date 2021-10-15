class persona
{
    constructor(name, surname){

        this.name = name;
        this.surname = surname;
    }
    getNameFull()
    {
        return this.name + " " + this.surname;
    }
}

const persona = new persona("Rommel", "Palma");
let nombre = persona.getNameFull();
console.log(nombre)