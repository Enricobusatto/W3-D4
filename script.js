// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
let statoIniziale = true;

document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  const bottone = document.getElementById("bottone-titolo");

  bottone.addEventListener("click", function () {
    if (statoIniziale) {
      h1.innerText = "Sicilian Taste";
      bottone.innerText = "Ripristina Titolo";
    } else {
      h1.innerText = "Sicily Roots";
      bottone.innerText = "Cambia Titolo";
    }

    statoIniziale = !statoIniziale;
  });
});

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function cambiaColoreSfondo() {
  const colori = ["purple", "red", "blue", "white"];
  const randomIndex = Math.floor(Math.random() * colori.length);
  document.body.style.backgroundColor = colori[randomIndex];
}
const bottoneColore = document.getElementById("bottone-colore");
bottoneColore.addEventListener("click", cambiaColoreSfondo);

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
let indirizzoOriginale = "Via Roma, 123 - 90100 Palermo (PA)";
let indirizzoAlternativo = "Corso Vittorio Emanuele, 456 - 90133 Palermo (PA)";
let indirizzoAttuale = indirizzoOriginale;

function toggleIndirizzo() {
  const paragrafo = document.getElementById("indirizzo");

  if (paragrafo.innerText === indirizzoOriginale) {
    paragrafo.innerText = indirizzoAlternativo;
  } else {
    paragrafo.innerText = indirizzoOriginale;
  }
}
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function evidenziaLinkAmazon() {
  const linkAmazon = document.querySelectorAll("table a[href*='amazon.it']");
  linkAmazon.forEach(link => {
    link.classList.add("color:red");
  });
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function toggleImmagini() {
  const immagini = document.querySelectorAll("table img");
  immagini.forEach(immagine => {
    immagine.classList.toggle("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const intestazioni = document.querySelectorAll("thead th");
  const rigaImmagini = document.querySelector("tr#immagini");

  intestazioni.forEach((th, index) => {
    th.style.cursor = "pointer";

    th.addEventListener("click", () => {
      const immagineTD = rigaImmagini.children[index]; 
      const immagine = immagineTD.querySelector("img");
      if (immagine) {
        immagine.classList.toggle("nascosta");
      }
    });
  });
});
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function attivaToggleColorePrezzi() {
  const prezzi = document.querySelectorAll("#prezzi td");

  prezzi.forEach(prezzo => {
    prezzo.style.color = "green"; // colore iniziale

    prezzo.addEventListener("click", () => {
      if (prezzo.style.color === "red") {
        prezzo.style.color = "green";
      } else {
        prezzo.style.color = "red";
      }
    });
  });
}document.addEventListener("DOMContentLoaded", attivaToggleColorePrezzi);