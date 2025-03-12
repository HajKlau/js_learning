const koszyk = [
    { produkt: "Laptop", cena: 3000 },
    { produkt: "Myszka", cena: 150 },
    { produkt: "Klawiatura", cena: 250 }        
];

const sumOfProductPrices = koszyk.reduce((acc, produkt) => {
   return acc + produkt.cena;
}, 0)
console.log(sumOfProductPrices);