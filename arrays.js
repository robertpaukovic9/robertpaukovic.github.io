
/*Polja*/

let br = 10;

let str1 = "abc";

let moj_niz = [1, "abc", true, 24.98];

console.log(moj_niz[0]);

console.log(moj_niz[2]);

moj_niz[0] = "bc";

console.log(moj_niz);

console.log(moj_niz.push(false));

console.log(moj_niz.unshift(0));

for (let x of moj_niz) {
    console.log(x);
}

/*JS objekti, svojstva i metode*/

let moj_objekt = {
    ime: "Robert",
    prezime: "Pauković",
    godiste: 1999,
    ispisi: function () {
        console.log("asdf");
    },
};

console.log(moj_objekt);

console.log(moj_objekt.ime);

console.log(moj_objekt.ispisi());

moj_objekt.studij = "informatika";

moj_objekt.godina = 3;

moj_objekt.upisan = true;

console.log(moj_objekt);

delete moj_objekt.ispisi();

console.log(moj_objekt);


/*Polje sa kolekcijom objekata*/


let profesor = [{

    ime: "Darko",
    prezime: "Etinger",
    titula: "izv.prof.dr.sc"
}, {
    ime: "Nikola",
    prezime: "Tanković",
    titula: "doc.dr.sc"
}, {
    ime: "Tihomir",
    prezime: "Orehovački",
    titula: "izv.prof.dr.sc",
}];


let asistent = [{
    ime: "Robert",
    prezime: "Šajina",
    titula: "mag.inf"
},
{
    ime: "Romeo",
    prezime: "Šajina",
    titula: "mag.inf"
},
{
    ime: "Ingrid",
    prezime: "Hrga",
    titula: "mag.oec"
}];


console.log(profesor[0]);

console.log(profesor[1].prezime);

console.log(profesor[2].titula);


console.log(asistent);

console.log(asistent[1].titula);

/*Ugnježđeni objekti sa metodama i vrijednostima*/


let student = [{
    ime: "Robert",
    prezime: "Pauković",
    godina: 3,
    najdrazi_kolegiji: [{
        sifra: 256388,
        naziv: "Digitalno poslovanje",
        nositelj: " prof.dr.sc Vanja Bevanda",
        ocjena: 4
    }, {
        sifra: 563897,
        naziv: "Poslovni informacijski sustavi",
        nositelj: " izv. prof.dr.sc Darko Etinger",
        ocjena: 5
    }, {
        sifra: 256339,
        naziv: "Napredne tehnike programiranja",
        nositelj: "doc.dr.sc Goran Oreški",
        ocjena: 2
    }, {
        sifra: 785263,
        naziv: "Upravljanje poslovnim procesima",
        nositelj: "izv. prof. dr. dc Darko Etinger",
        ocjena: 4
    }, {
        sifra: 722563,
        naziv: "Osnove IKT",
        nositelj: "doc.dr.sc Snježana Babić",
        ocjena: 2
    }],

}, {
    sifra: 755168,
    naziv: "Modeliranje i simulacije",
    nositelj: "izv.prof.dr.sc Darko Etinger",
    ocjena: 4
}, {}]


























