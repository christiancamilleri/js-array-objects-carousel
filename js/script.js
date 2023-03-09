// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione


// milenstone 0
// crea container
// inserisci immagine


// containerImgEl.style.backgroundImage = "url(../img/01.webp)";
// containerImgEl.style.backgroundSize = "cover";
// containerImgEl.style.backgroundRepeat = "no-repeat";

//---------- fine milenstone 0 -----------------------


// bersaglio container-img
let containerImgEl = document.getElementById("container-img");

// creo img in html
let myImg = document.createElement("img");
containerImgEl.append(myImg);

let arrowtopEl = document.getElementById("arrow-top");
let arrowbottomEl = document.getElementById("arrow-bottom");

let asideEl = document.getElementById("aside")

// creo array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let index = 0;

///IMPOSTARE IMG SRC UGUALE ALLA PRIMA IMG DELL'ARRAY:
myImg.src = images[index].image;

// inserisco titolo e descrizione
let containerTestoEl = document.getElementById("container-testo");
let titolo = document.createElement("div");
let testo = document.createElement("div");

titolo.classList.add("titolo")

titolo.innerHTML = images[index].title;
testo.innerHTML = images[index].text;

titolo.style.color = "white";
testo.style.color = "white";


containerTestoEl.append(titolo);
containerTestoEl.append(testo);

for (let i = 0; i < images.length; i++) {
    let asideImg = document.createElement("img");

    asideImg.src = images[i].image;

    asideImg.classList.add("littleimg")

    asideImg.style.height = "calc(100% / " + images.length + ")";
    asideEl.append(asideImg)
}

// seleziono tutti gli elemeti con classe littleimg
let littleImgEl = document.querySelectorAll(".littleimg");
console.log(littleImgEl)

// aggiungo classe active
littleImgEl[index].classList.add("active");

// creo evento alla pressione della freccia in basso
arrowbottomEl.addEventListener("click", function () {

    littleImgEl[index].classList.remove("active");
    
    // creo ciclo infinito
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    };

    myImg.src = images[index].image;

    titolo.innerHTML = images[index].title;
    testo.innerHTML = images[index].text;

    littleImgEl[index].classList.add("active");

});

// creo evento freccia in alto
arrowtopEl.addEventListener("click", function() {
    
    littleImgEl[index].classList.remove("active");

    // creo ciclo infinito
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    };

    myImg.src = images[index].image;

    titolo.innerHTML = images[index].title;
    testo.innerHTML = images[index].text;

    littleImgEl[index].classList.add("active");
});


// //bonus 2
// autoPlay( function () {
   
//     littleImgEl[index].classList.remove("active");

//     if (index < images.length - 1) {
//         index++;
//     } else {
//         index = 0;
//     }
    
//     myImg.src = images[index].image;

//     titolo.innerHTML = images[index].title;
//     testo.innerHTML = images[index].text;

//     littleImgEl[index].classList.add("active");

// }, 3000);

