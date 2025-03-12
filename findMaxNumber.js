const liczby = [6, 19, 30, 5, 100, 80];

const maxLiczba = liczby.reduce((acc, liczba) => Math.max(acc, liczba));

console.log(maxLiczba);