//her laver vi en variable
//explicitet definere typen som streng
let variable: string = "dette er en string"

//det kan også gøres implicit, dette er fordi vi initializere variablen med en streng
let variable2 = "dette er også en streng"

//vi kan også definere konstanter
const pi = 3.14159265359

//klasser kan også laves
class Person {
    //2 private variable
    private m_navn: string
    private m_age: number
    //2 get funktion, som returnere de private variable
    get navn(): string {
        return this.m_navn
    }
    get age(): number {
        return this.m_age
    }
    //konstruktør som sætter de private variable
    constructor(navn: string, age: number) {
        this.m_navn = navn
        this.m_age = age
    }
}
let person = new Person("Mads Østermark", 19)
console.log(person.navn)
console.log(person.age.toString())