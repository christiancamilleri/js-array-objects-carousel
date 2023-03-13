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

// bersaglio container-img
const containerImgEl = document.getElementById("container-img");
// creo img in html
const arrowtopEl = document.getElementById("arrow-top");
const arrowbottomEl = document.getElementById("arrow-bottom");
const asideEl = document.getElementById("aside")
const containerTestoEl = document.getElementById("container-testo");
const startStopBtnEl = document.getElementById("start-stop-btn");
const reverseBtnEl = document.getElementById("reverse-btn");
const testo = document.createElement("div");
const myImg = document.createElement("img");
const titolo = document.createElement("div");



containerImgEl.append(myImg);
containerTestoEl.append(titolo);
containerTestoEl.append(testo);


let index = 0;


// creo aside img
createAsideImg(images, asideEl)

// seleziono tutti gli elemeti con classe littleimg
const littleImgEl = document.querySelectorAll(".littleimg");


console.log(littleImgEl)


showSlide(images, index)

// creo evento alla pressione della freccia in basso
arrowbottomEl.addEventListener("click", function () {

    index = updateIndex(index, "giu");

    showSlide(images, index, littleImgEl)

});

// creo evento freccia in alto
arrowtopEl.addEventListener("click", function () {

    index = updateIndex(index, "su")

    showSlide(images, index, littleImgEl)
});



// bonus 2 autoplay
// creo booleana autoplay
let isAutoplayOn = true;
// indico direzione autoplay
let autoplayDirection = "giu"


// memorizzo in una variabile la timing function
let autoplayFunction = setInterval(() => {
    index = updateIndex(index, "giu");
    showSlide(images, index);
}, 3000);


startStopBtnEl.addEventListener("click", function () {

    if (isAutoplayOn) {
        clearInterval(autoplayFunction)

        isAutoplayOn = false;
        this.innerText = "start"
    } else {
        // memorizzo in una variabile la timing function
        autoplayFunction = setInterval(() => {
            index = updateIndex(index, "giu");
            showSlide(images, index)
        }, 3000)
        isAutoplayOn = true;
        this.innerText = "stop"
    }
});



// reverse
reverseBtnEl.addEventListener("click", () => {
    
    if(autoplayDirection == "giu") {
        autoplayDirection = "su"
    } else {
        autoplayDirection = "giu"
    }
    
     clearInterval(autoplayFunction)

    // faccio partire nuovamente l autoplay
    autoplayFunction = setInterval(() => {
        index = updateIndex(index, autoplayDirection);
        showSlide(images, index)
    }, 3000)

    isAutoplayOn = true;

    if (isAutoplayOn) {
        startStopBtnEl.innerText = "stop"
    } else {
        startStopBtnEl.innerText = "start"
    }
})




// -------------function---------------------------------------------------------------------------------



function createAsideImg(array, genitore) {


    array.forEach((element, actualIndex) => {
        let asideImg = document.createElement("img");
        asideImg.src = element.image;
        asideImg.classList.add("littleimg")
        asideImg.style.height = "calc(100% / " + array.length + ")";
        genitore.append(asideImg)


        // bonus 1
        asideImg.addEventListener("click", function () {
            index = actualIndex;
            showSlide(images, actualIndex)
        })

    })



}

function showSlide(array, index) {
    let slideObject = array[index];

    // cambio immagine
    myImg.src = slideObject.image;

    // cambi il titolo
    titolo.innerHTML = slideObject.title;
    titolo.classList.add("titolo")
    // cambio la descrizione
    testo.innerHTML = slideObject.text;

    titolo.style.color = "white";
    testo.style.color = "white";

    // rimuovo classe active
    littleImgEl.forEach((element) => {
        element.classList.remove("active");
    })

    // rendo active miniatura relativa all index
    littleImgEl[index].classList.add("active");


}

function updateIndex(index, direzione) {
    // controllo quale sia la direzione
    if (direzione == "su") {

        // se sono alla prima slide
        if (index <= 0) {

            return images.length - 1;

        } else {

            return index - 1;

        }

    } else {

        // se sono all'ultima slide
        if (index >= images.length - 1) {

            return 0;

        } else {

            return index + 1;

        }

    }

}

