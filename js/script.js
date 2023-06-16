// Definisco un array con i percorsi delle immagini
const images = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg"
];
  
  // Seleziono il div con classe "container"
  const container = document.querySelector(".container");
  
  // Iterazione sull'array di immagini
  for (let i = 0; i < images.length; i++) {
    // Creo un nuovo elemento img
    const image = document.createElement("img");
    // Imposto l'attributo src dell'immagine con il percorso corrispondente nell'array
    image.src = images[i];
    // Imposto l'attributo alt dell'immagine con una descrizione generica
    image.alt = "img_" + (i + 1);
    // Aggiungo la classe "image" all'immagine
    image.classList.add("image");
    // Se l'immagine è la prima nell'array, aggiungo la classe "appear" per renderla visibile
    if (i === 0) {
      image.classList.add("appear");
    } else {
      // Altrimenti, aggiungo la classe "hide" per nasconderla
      image.classList.add("hide");
    }
    // Aggiungo l'immagine al div con classe "container"
    container.appendChild(image);
}