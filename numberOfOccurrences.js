const owoce = ["jablko", "banan", "jablko", "pomarancza", "banan", "jablko"];

const wystapienia = owoce.reduce((acc, owoc) => { //reduce() aby zamiast jednej liczby zwrócić obiekt
    acc[owoc] = (acc[owoc] || 0) + 1;
    return acc;
}, {}); //{} - oznacza że reduce() zaczyna od pustego obiektu

console.log(wystapienia);  
