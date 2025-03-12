const liczby = [10, 20, 30, 40, 50];

const srednia = liczby.reduce((acc, liczba, index, array) => {
    acc += liczba;
    if (index === array.length - 1) {
        return acc / array.length;
    }
    return acc;
}, 0);

console.log(srednia);