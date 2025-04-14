
let statoIniziale = true;

document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  const bottone = document.getElementById("bottone-titolo");

  bottone.addEventListener("click", function () {
    if (statoIniziale) {
      h1.innerText = "SicilianTaste";
      bottone.innerText = "Ripristina Titolo";
    } else {
      h1.innerText = "SicilyRoots";
      bottone.innerText = "Cambia Titolo";
    }

    statoIniziale = !statoIniziale;
  });
});
// EXERCISE 8: Write a function to change the background color of the page.
// This function should be triggered by a button click or another event.

function cambiaColoreSfondo() {
  const colori = ["purple", "red", "blue", "white"];
  const randomIndex = Math.floor(Math.random() * colori.length);
  document.body.style.backgroundColor = colori[randomIndex];
}
const bottoneColore = document.getElementById("bottone-colore");
bottoneColore.addEventListener("click", cambiaColoreSfondo);

// function cambiaIndirizzo() {
//         const paragrafo = document.getElementById("indirizzo");
//         paragrafo.innerText = "Corso Vittorio Emanuele, 456 - 90133 Palermo (PA)";
//       } 
// const bottoneIndirizzo = document.getElementById("bottone-indirizzo");
// bottoneIndirizzo.addEventListener("click", cambiaIndirizzo);

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
    