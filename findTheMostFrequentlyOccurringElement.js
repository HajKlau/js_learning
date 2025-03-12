const liczby = [3, 7, 3, 1, 3, 7, 7, 7, 5];

const najczesciejWystepujacyElement = liczby.reduce((acc, liczba) => {
    acc[liczba] = (acc[liczba] || 0) + 1;
    return acc;
}, {});

console.log(najczesciejWystepujacyElement); 

const najczestszaLiczba = Object.keys(najczesciejWystepujacyElement).reduce((maxLiczba, liczba) => {
    return najczesciejWystepujacyElement[liczba] > najczesciejWystepujacyElement[maxLiczba] ? liczba : maxLiczba;
});

console.log(`Najczęściej występująca liczba to: ${najczestszaLiczba}`);
