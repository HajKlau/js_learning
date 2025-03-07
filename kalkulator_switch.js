let liczba1 = 15;
let liczba2 = 20;
let operator = "+";  // można zmieniać operatory na: "-", "*" itp.

switch(operator) {
    case "+":
        console.log("Wynik dodawania: " + (liczba1 + liczba2));
        break;
    case "-":
        console.log("Wynik odejmowania: " + (liczba1 - liczba2));
        break;
    case "*":
        console.log("Wynik mnożenia: " + (liczba1 * liczba2));
        break;
    case "/":
        console.log("Wynik dzielenia: " + (liczba1 / liczba2));
        break;
    default:
        console.log("Nieznany operator");
}