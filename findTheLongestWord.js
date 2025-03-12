const slowa = ["kot", "samochod", "drzewo", "telewizor"];

const najdluzszyWyraz = slowa.reduce((acc, slowo) => {
    if (acc.length > slowo.length) {
        return acc; 
    } else {
    return slowo;
    }
}, ""); //Pusty string jako wartosc poczatkowa

console.log(najdluzszyWyraz);