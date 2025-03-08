let myPlant = {
    name:  "Alocazja",
    pochodzenie: ["Himalaje", "Azja", "Australia"],
    gatunek: "Obrazkowate",
    ileWszystkichGatunkow: 29,
};

myPlant.czyLubiSłońce = true;
delete myPlant.gatunek;

console.table(myPlant);