/*Funkcija sa praznim argumentom*/

function prijava() {
    alert("Prijavio se!")
}

function neka_poruka() {
    alert("Pozdrav!");
}


/*Anonimne funkcije*/

let f1 = function () {
    alert("Način 1")
}

let f2 = function () {
    alert("Način 2")
}

const f3 = function () {
    alert("Način 3")
}



/*Povratne vrijednosti funkcije u terminalu*/

function zbroj(a, b) {
    let z = a + b;
    return z;
}

console.log("Zbroj je:", zbroj(2, 3));

let z2 = function (a, b) {
    return a + b;
}

console.log("Drugi zbroj je: ", z2(4, 6))


/*Arrow funkcije*/

let z3 = (a, b) => a + b;

console.log("Treći zbroj je:", z3(4, 3));

let z4 = (a, b) => (a >= 0 ? a + b : a - b); /*Ternarni operator*/

console.log("Četvrti zbroj je:", z4(10, 15));


/*Doseg ili scope funkcije*/

let url = "https://www.google.de";

function posalji_ime() {
    let ime = document.getElementById("Ime").value;


    fetch(url, { method: 'POST', body: ime })
}

function preuzmi_podatke() {

}

/*For accordions*/

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");

    });
});












