// Seleziono gli elementi
let titoloInput = document.getElementById("titoloInput");
let paragrafoInput = document.getElementById("paragrafoInput");
let btnCrea = document.getElementById("btnCrea");
let contenitore = document.getElementById("contenitoreArticoli");

// Al click del bottone
btnCrea.addEventListener("click", function () {

    // Prendo i valori scritti dall'utente
    let titolo = titoloInput.value;
    let paragrafo = paragrafoInput.value;

    // EXTRA: controllo se i campi sono vuoti
    if (titolo === "" || paragrafo === "") {
        alert("Attenzione! Titolo e paragrafo non possono essere vuoti!");
         return; // interrompe la funzione
    }

    // Creo l'articolo
    let articolo = document.createElement("article");

    // Creo il titolo (h2)
    let h2 = document.createElement("h2");
    h2.innerText = titolo;

    // Creo il paragrafo
    let p = document.createElement("p");
    p.innerText = paragrafo;

    // Metto h2 e p dentro l'articolo
    articolo.appendChild(h2);
    articolo.appendChild(p);

    // Aggiungo l'articolo nella pagina
    contenitore.appendChild(articolo);

    // EXTRA: pulisco gli input
    titoloInput.value = "";
    paragrafoInput.value = "";
});