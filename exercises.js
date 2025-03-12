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

//strzałkowa funkcja (arrow functions)
const mnoz = (v, z) => v * z;

console.log(mnoz(4, 8));


//Tablice
let warzywa = ["marchew", "pietruszka", "baklazan"];
let liczby = [10, 20, 30];
let mix = ["Ania", 25, true];  //Tablica może mieć różne typy danych

//dostęp do elementów tablicy
console.log(warzywa[0]);

//operacje na tablicach
warzywa.push("cukinia"); //dodaje element na końcu tablicy
warzywa.unshift("papryka");  //dodaje element na początku tablicy
warzywa.pop(); //usuwa ostatni element tablicy
warzywa.shift();  //usuwa pierwszy element tablicy
console.log(warzywa.length);  //sprawdzanie dlugości tablicy

warzywa.forEach((warzywo) => {
    console.log("Warzywo:", warzywo);
}); //iteracja przez tablice 


//Obiekty

let car = {
    marka: "Toyota",
    rok: 2015,
    czyLubisz: true
};

//dostęp do obiektów ( . lub [] )
console.log(car.marka);  //1 metoda
console.log(car["rok"]);  //2 metoda

//dodawanie/usuwanie wartości z obiektu
car.kolor = "bialy";
delete car.czyLubisz;

//obiekt z tablicą
let osoba2 = {
    pelneImie: "Anna Nowak",
    ulubioneFilmy: ["Incepcja", "Interstellar", "Tenet"]
};
console.log(osoba2.ulubioneFilmy[1]);  //Interstellar

//obiekt w tablicy
let osoby = [
    {imie: "Kasia", wiek: 30},
    {imie: "Tomek", wiek: 40}
];
console.log(osoby[0].imie); //Kasia

//Asynchroniczność
    //JavaScript działa jednowątkowo, co oznacza, że wykonuje kod linia po linii. Jeśli jedno zadanie (np. pobieranie danych z serwera) zajmie dużo czasu, cały program musiałby czekać, aż to zadanie się skończy. To by blokowało wszystko inne.

//Przykład problemu synchronicznego kodu:
console.log("Zaczynam");
for (let i = 0; i < 1000000000; i++) {}
console.log("Koniec");  //pętla for zajmuje dużo czasu, dopiero po jej zakończeniu zostanie wypisane "Koniec"

/* Główne sposoby obsługi anynchroniczności: 
1. setTimeout() -uruchamia kod po pewnym czasie
2. setIntervak() - powtarza kod co określony czas
3. Promise - nowoczesny sposób na obsługę asynchronicznego kodu (z .then()).
4. async/await - jeszcze lepszy sposób na obługę asynchronicznego kodu */

//Przykład z setTimeout()
console.log("Start");

setTimeout(() => {
    console.log("to pojawi się dopiero po 2 sekundach");
}, 2000); //2000 ms = 2s

console.log("Koniec");
//najpierw wyswietli start, pozniej koniec, a na końcu(bo po 2 sekundach)-To pojawi się po 2 sekundach

//ES6 + nowe funkcje (uzupełnienie)

//przyklad funckji z wartością domyślną
const przywitaj = (imie = "Gosc") => `Cześć, ${imie} !`;

console.log(przywitaj()); //Cześć Gość!
console.log(przywitaj("Ania")); //Cześć Ania!
//Jeżeli użytkownik nie poda warto ści, funkcja użyje Gość jako domyślną

//Destrukturyzacja - szybkie wyciąganie wartości z obiektów i tablic
const zwierze = {
    gatunek: "ssak",
    wiek: 2,
    rodzaj: "pies"
};

const { gatunek, rodzaj } = zwierze;
console.log(gatunek, rodzaj);

//destrukturyzacja tablic
const zbiorLiczb = [10, 20, 30];

const [pierwsza, druga] = liczby;

console.log(pierwsza, druga);


//Spread Operator - rozpakowuje tablice i obiekty do nowych zmiennych

//przykład - kopieowanie tablicy
const oryginalnaTablica = [1, 2, 3];
const nowaTablica = [...oryginalnaTablica, 4,5];

console.log(nowaTablica);  //[1,2,3,4,5]

//przykład - kopiowanie obiektu
const daneOsoby = { imie: "Wioletta", wiek: 45 };
const noweDaneOsoby = {...daneOsoby, miasto: "Kraków"};
console.log(noweDaneOsoby);  //imie: "Wioletta", wiek: 45, miasto: "Kraków"
