// MILESTONE 2:

// // Definisco un array con i percorsi delle immagini
// const images = [
//   "./img/01.jpg",
//   "./img/02.jpg",
//   "./img/03.jpg",
//   "./img/04.jpg",
//   "./img/05.jpg"
// ];

// // Seleziono il div con classe "container"
// const container = document.querySelector(".container");

// // Iterazione sull'array di immagini
// for (let i = 0; i < images.length; i++) {
//   // Creo un nuovo elemento img
//   const image = document.createElement("img");
//   // Imposto l'attributo src dell'immagine con il percorso corrispondente nell'array
//   image.src = images[i];
//   // Imposto l'attributo alt dell'immagine con una descrizione generica
//   image.alt = "img_" + (i + 1);
//   // Aggiungo la classe "image" all'immagine
//   image.classList.add("image");
//   // Se l'immagine è la prima nell'array, aggiungo la classe "appear" per renderla visibile
//   if (i === 0) {
//     image.classList.add("appear");
//   } else {
//     // Altrimenti, aggiungo la classe "hide" per nasconderla
//     image.classList.add("hide");
//   }
//   // Aggiungo l'immagine al div con classe "container"
//   container.appendChild(image);
// }

// MILESTONE: 3

// Array delle immagini
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Indice dell'immagine attiva
let currentImageIndex = 0;

// Elementi del DOM
const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Funzione per aggiornare l'immagine visualizzata nel carosello
function updateCarouselImage() {
    const imageUrl = "img/" + images[currentImageIndex];
    carouselImage.src = imageUrl;
}

// Funzione per mostrare l'immagine precedente
function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Se l'indice è negativo, imposta l'indice all'ultimo elemento dell'array
    }
    updateCarouselImage();
}

// Funzione per mostrare l'immagine successiva
function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex === images.length) {
        currentImageIndex = 0; // Se l'indice raggiunge la lunghezza dell'array, imposta l'indice al primo elemento (ciclo infinito)
    }
    updateCarouselImage();
}

// Aggiunta degli event listener per i clic sulle frecce
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

// Aggiornamento iniziale dell'immagine nel carosello
updateCarouselImage();
