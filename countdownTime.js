let counter = 5;

let timer = setInterval(() => {
    console.log(`countdown: ${counter}`);
    counter--;

    if (counter === 0) {
        console.log("End of countdown");
        clearInterval(timer);
    }
}, 1000); 