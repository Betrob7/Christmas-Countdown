// Funktion för att räkna ner till julafton
function countdownToChristmas() {
    // Hämta dagens datum och tid
    const today = new Date();
    const year = today.getFullYear();

    // Sätt datum för julafton (24 december) det här året
    const christmas = new Date(year, 11, 24); // 11 är december, eftersom månader är 0-indexerade

    // Beräkna tiden mellan idag och julafton i millisekunder
    const timeDifference = christmas - today;

    // Om julafton redan passerat i år, sätts nästa år som mål
    if (timeDifference < 0) {
        christmas.setFullYear(year + 1);
    }

    // Räkna ut dagar, timmar, minuter och sekunder
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Uppdatera HTML med nedräkningen
    document.getElementById("countdown").innerHTML = `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;

    // Om nedräkningen är klar (det är julafton)
    if (timeDifference < 0) {
        clearInterval(countdown); // Stoppa nedräkningen
        document.getElementById("countdown").innerHTML = "God Jul! 🎅🎁";
    }
}

// Uppdatera nedräkningen varje sekund
const countdown = setInterval(countdownToChristmas, 1000);
