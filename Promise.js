function pobierzUzytkownika() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ imie: "Wiktor", wiek: 25 });
        }, 2000);
    });
}

async function wyswietlDane() {
    try {
        console.log("Pobieranie danych...");
        let dane = await pobierzUzytkownika();
        console.log(`Dane użytkownika: Imię - ${dane.imie}, Wiek = ${dane.wiek}`);
    } catch (error) {
        console.error("Wystąpił błąd:", error);
    }
}

wyswietlDane();