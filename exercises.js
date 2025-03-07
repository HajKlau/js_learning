//Trzy sposoby deklarowania zmienych

let imie = "Paulina";  //Można zmieniać wartość
const wiek = 28;  //Nie można zmieniać wartości

var miasto = "Warszawa"; //stara, niezalecana (ma nieprzewidywalne zachowanie)

//Typy danych

let liczba = 11; //Number
let tekst = "Cześć";  //String
let prawda = true;  //Boolean
let owoce = ["jabłko", "banan"];  //Array
let osoba = {imie: "Paulina", wiek: 28};  //Object
let pusta = null;  //Null
let niezadeklarowana;  //Undefined

//Ćwiczenie 1

let name = "Wiktor";
let age = 25;
let doYouLikeJs = true;
let favouriteMovies = ["Black Mirror", "Jurassic Park"];
let dataOfThePerson = {name: "Wiktor", age: 25};

console.log(name);
console.log(age);
console.log(doYouLikeJs);
console.log(favouriteMovies);
console.log(dataOfThePerson);

//Operatory

console.log(5 + 3); //8
console.log(10 % 3); //1
console.log(2 ** 3); //8
console.log( 5 == "5"); //true (porównuje wartość)
console.log( 5 === "5"); //false (porównuje wartość + typ)
console.log(true && false); //false
console.log(true || false); //true

//Instrukcje warunkowe

let wiek1 = 18;

if (wiek1 >= 18) {
    console.log("Możesz głosować");
} else {
    console.log("Jesteś za młody");
}

//Switch-case

let kolor = "czerwony";

switch (kolor) {
    case "czerwony":
        console.log("Wybrałeś czerwony");
        break;
    case "niebieski":
        console.log("Wybrałeś niebieski");
        break;
    default:
        console.log("Nie znam tego koloru");
}


//Pętle

//for
for (let i =  0; i < 5; i++) {
    console.log("Iteracja: ", i);
}

//While
let x = 0;
while (x < 3) {
    console.log("x =", x);
    x++
}

//forEach(dla tablic)
let fruits = ["jabłko", "banan", "gruszka"];

fruits.forEach((fruit) => {
    console.log("Owoc:", fruit);
});


//Funkcje

//zwykła funkcja
function dodaj(a, b) {
    return a + b;
}

console.log(dodaj(1,2)); 

//strzałkowa funkcja
const mnoz = (v, z) => v * z;

console.log(mnoz(4, 8));

