//Searchbar
const object = [
    { name: 'xxxx' },
    { name: 'yyyy' },
    { name: 'zzzz' },
    { name: 'mmmm' },
    { name: 'oooo' }
];

const list = document.getElementById('list');

function setList(group) {
    clearList();
    for (const person of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(object.filter(person => {
            return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));
    } else {
        clearList();
    }
});

//Searchbar Ende

function MyFunctionNAV() {
	var x = document.getElementById("circleNav");
	
    x.style.display === "block";

    if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function Einkaufsliste() {
//Liste
var TropicListe = document.getElementById("TropicListe");
var BircherListe = document.getElementById("BircherListe");
var ChocolateListe = document.getElementById("ChocolateListe");

var AmaranthListe = document.getElementById("AmaranthListe");
var DinkelListe = document.getElementById("DinkelListe");
var LeinsamenListe = document.getElementById("LeinsamenListe");
var QuinoaflockenListe = document.getElementById("QuinoaflockenListe");

var AnanasListe = document.getElementById("AnanasListe");
var ApfelstückeListe = document.getElementById("ApfelstückeListe");
var CranberriesListe = document.getElementById("CranberriesListe");
var MangoListe = document.getElementById("MangoListe");
var GojibeerenListe = document.getElementById("GojibeerenListe");

var CashewkerneListe = document.getElementById("CashewkerneListe");
var KokoschipsListe = document.getElementById("KokoschipsListe");
var MacadamiaListe = document.getElementById("MacadamiaListe");

var CranberryChocsListe = document.getElementById("CranberryChocsListe");
var HonigflockenListe = document.getElementById("HonigflockenListe");
var SchokoCrunchyListe = document.getElementById("SchokoCrunchyListe");
var RosinenChocsListe = document.getElementById("RosinenChocsListe");
//Liste Ende

//Basis
if (document.form1.basis[0].checked) {
    TropicListe.style.display = "block";
} else {
    TropicListe.style.display = "none";
}

if (document.form1.basis[1].checked) {
    BircherListe.style.display = "block";
} else {
    BircherListe.style.display = "none";
}

if (document.form1.basis[2].checked) {
    ChocolateListe.style.display = "block";
} else {
    ChocolateListe.style.display = "none";
}

//Verfeinerung
if (document.form1.Amaranth.checked) {
    AmaranthListe.style.display = "block";
} else {
    AmaranthListe.style.display = "none";
}

if (document.form1.Dinkel.checked) {
    DinkelListe.style.display = "block";
} else {
    DinkelListe.style.display = "none";
}
    
if (document.form1.Leinsamen.checked) {
    LeinsamenListe.style.display = "block";
} else {
    LeinsamenListe.style.display = "none";
}

if (document.form1.Quinoaflocken.checked) {
    QuinoaflockenListe.style.display = "block";
} else {
    QuinoaflockenListe.style.display = "none";
}

//Früchte
if (document.form1.Ananas.checked) {
    AnanasListe.style.display = "block";
} else {
    AnanasListe.style.display = "none";
}

if (document.form1.Apfelstücke.checked) {
    ApfelstückeListe.style.display = "block";
} else {
    ApfelstückeListe.style.display = "none";
}

if (document.form1.Cranberries.checked) {
    CranberriesListe.style.display = "block";
} else {
    CranberriesListe.style.display = "none";
}

if (document.form1.Mango.checked) {
    MangoListe.style.display = "block";
} else {
    MangoListe.style.display = "none";
}

if (document.form1.Gojibeeren.checked) {
    GojibeerenListe.style.display = "block";
} else {
    GojibeerenListe.style.display = "none";
}

//Nüsse und Kerne
if (document.form1.Cashewkerne.checked) {
    CashewkerneListe.style.display = "block";
} else {
    CashewkerneListe.style.display = "none";
}

if (document.form1.Kokoschips.checked) {
    KokoschipsListe.style.display = "block";
} else {
    KokoschipsListe.style.display = "none";
}

if (document.form1.Macadamia.checked) {
    MacadamiaListe.style.display = "block";
} else {
    MacadamiaListe.style.display = "none";
}

//Extras
if (document.form1.CranberryChocs.checked) {
    CranberryChocsListe.style.display = "block";
} else {
    CranberryChocsListe.style.display = "none";
}

if (document.form1.Honigflocken.checked) {
    HonigflockenListe.style.display = "block";
} else {
    HonigflockenListe.style.display = "none";
}

if (document.form1.SchokoCrunchy.checked) {
    SchokoCrunchyListe.style.display = "block";
} else {
    SchokoCrunchyListe.style.display = "none";
}

if (document.form1.RosinenChocs.checked) {
    RosinenChocsListe.style.display = "block";
} else {
    RosinenChocsListe.style.display = "none";
}
}

function Berechne()    {

    /*Variablen*/
    var percent = 0.15;
    var percentHigh = 0.25;
    var couponPercent = 0.05;
    var Liste25 = document.getElementById("25Liste");
    var Liste50 = document.getElementById("50Liste");
    var MwSt = document.getElementById("MwStListe");
    var VersandkostenListe = document.getElementById("VersandkostenListe");
    var check = document.getElementById("check");
    var Ausgabe = document.getElementById("Preis_Ausgabe");
    var couponStyle = document.getElementById("coupon");
    var ListeRot = document.getElementById("Liste");
    var cash = document.getElementById("cash");

if  (document.form1.basis[2].checked) {
        Preis = 3.6;
    } else if (document.form1.basis[1].checked) {
        Preis = 3.5;
    } else if (document.form1.basis[0].checked) {
        Preis = 3.4;
    } else {
        alert("Bitte wählen Sie eine Basis aus!");
}
    
//Verveinerung
    
if (document.form1.Amaranth.checked) {
    Preis = Preis + 0.5;
}

if (document.form1.Dinkel.checked) {
      Preis = Preis + 0.6;
}
    
if (document.form1.Leinsamen.checked) {
    Preis = Preis + 0.6;
}

if (document.form1.Quinoaflocken.checked) {
    Preis = Preis + 0.6;
}

//Früchte

if (document.form1.Ananas.checked) {
    Preis = Preis + 0.6;
}

if (document.form1.Apfelstücke.checked) {
    Preis = Preis + 0.65;
}

if (document.form1.Cranberries.checked) {
    Preis = Preis + 0.65;
}

if (document.form1.Mango.checked) {
    Preis = Preis + 0.7;
}

if (document.form1.Gojibeeren.checked) {
    Preis = Preis + 1.1;
}

//Nüsse und Kerne

if (document.form1.Cashewkerne.checked) {
    Preis = Preis + 0.55;
}

if (document.form1.Kokoschips.checked) {
    Preis = Preis + 0.25;
}

if (document.form1.Macadamia.checked) {
    Preis = Preis + 0.95;
}

//Extras

if (document.form1.CranberryChocs.checked) {
    Preis = Preis + 0.6;
}

if (document.form1.Honigflocken.checked) {
    Preis = Preis + 0.6;
}

if (document.form1.SchokoCrunchy.checked) {
    Preis = Preis + 0.5;
}

if (document.form1.RosinenChocs.checked) {
    Preis = Preis + 0.6;
}

if (Preis >= 6.0) {
    Preis = Preis - Preis  * percentHigh;
    Liste50.style.display = "block";
    Liste25.style.display = "none";
} else if (Preis >= 4.0 && Preis < 6.0) {
    Liste25.style.display = "block";
    Liste50.style.display = "none";
} else {
    Liste50.style.display = "none";
    Liste25.style.display = "none";
}

Preis = Preis + Preis * 0.19; //MwSt

/*Versandkosten*/
if (Preis <= 8) {
    Preis = Preis + 2.95;
    VersandkostenListe.style.display = "block";
    check.style.background = "#ad0c00";
    Ausgabe.style.borderColor = "#ad0c00";
    couponStyle.style.borderColor = "#ad0c00";
    ListeRot.style.borderColor = "#ad0c00";
    ListeRot.style.boxShadow = "0 0 10px 0 #ad0c00";
    cash.style.borderColor = "#ad0c00";
    couponStyle.style.backgroundColor = "ad0c00";
} else {
    VersandkostenListe.style.display = "none";
    check.style.background = "#00BF7F";
    Ausgabe.style.borderColor = "#00BF7F";
    couponStyle.style.borderColor = "#00BF7F";
    ListeRot.style.borderColor = "#00BF7F";
    ListeRot.style.boxShadow = "0 0 10px 0 #00BF7F";
    cash.style.borderColor = "#00BF7F";
}

/*coupon START*/
var myRe = "Lucky5";
var coupon = myRe.trim(); //.trim() = nimmt lerzeichen weg
var input = document.getElementById('coupon').value;
var CouponListe = document.getElementById("CouponListe");

if (input.toUpperCase() == coupon.toUpperCase()) { //*.toUpperCase = schreibt alles groß
    Preis = Preis - Preis * couponPercent;
    CouponListe.style.display = "block";
} else if (input.toUpperCase() == "") {
    Preis = Preis;
    CouponListe.style.display = "none";
} else if (input.toUpperCase() !== coupon.toUpperCase()) {
    Preis = Preis;
    alert('Error: Falscher Coupon');
}
/***coupon ENDE***/

MwSt.style.display = "block";

document.form1.Preis_Ausgabe.value = Preis.toFixed(2) + " €"; //mit .replace("." , ",") kann man den Punkt durch ein Komma tauschen, also Preis.toFixed(2).replace("." , ","); (Kein Komma ist auf dieser Website beabsichtigt, da es meiner Meinung nach nicht schön aussieht.)
}

/*ShowHide && ScrollToTop*/
var bezahlen = document.getElementById("bezahlen");
var ScrollToTopBtn = document.getElementById("ScrollToTopBtn");
var add = document.getElementById("add");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) { //50 = px //body oder dokument 100px zu top
        bezahlen.style.display = "block";
        ScrollToTopBtn.style.display = "block";
        add.style.display = "block";
    } else {
        bezahlen.style.display = "none";
        ScrollToTopBtn.style.display = "none";
        add.style.display = "none";
    }
}

function ScrolltoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/***ShowHide && ScrollToTop***/

function ScrollDown() {
    var Down = document.getElementById("basisDIV");
    Down.scrollIntoView();
}

/*MwSt START*/
function BerechneMwSt() {
    Nettopreis= document.form2.Netto_Eingabe.value;

    if (document.form2.Mehrwertsteuersatz_Eingabe[0].checked) {
        Mehrwertsteuersatz= document.form2.Mehrwertsteuersatz_Eingabe[0].value / 100;
    } else if (document.form2.Mehrwertsteuersatz_Eingabe[1].checked) {
         Mehrwertsteuersatz= document.form1.Mehrwertsteuersatz_Eingabe[1].value / 100;
    } else {
        Mehrwertsteuersatz=0;
        Mehrwertsteuer = Nettopreis*Mehrwertsteuersatz;
        document.form2.Mehrwertsteuer_Ausgabe.value= Mehrwertsteuer;
    }
}
/***MwSt END***/