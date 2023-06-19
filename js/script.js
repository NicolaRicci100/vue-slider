console.log('JS OK');

// prendo tutte le immagini in un array
const posters = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
console.log(posters.length);

//creo una variabile per la gallery
const gallery = document.querySelector('.gallery');

//creo due variabili per i bottoni
const topButton = document.getElementById('top');
const downButton = document.getElementById('down');

// creo una variabile per mettere le immagini in pagina
let onePoster = '';

//creo un ciclo per mettere tutte le immagini
for(let i = 0; i < posters.length; i++){
    onePoster += `<img src="${posters[i]}">`;
}
//restituisco le immagini alla pagina
gallery.innerHTML = onePoster;

// creo una variabile che recupera tutte le immagini del carosello
const galleryImages = document.querySelectorAll('#carousel img');

//metto un'immagine di partenza
let dispalyImage = 0;
galleryImages[dispalyImage].classList.add('active');

//funzione bottone superiore
topButton.addEventListener('click', function(){
    if(!dispalyImage){
        return;
    }
    galleryImages[dispalyImage].classList.remove('active');
    dispalyImage--;
    galleryImages[dispalyImage].classList.add('active');
})
//funzione bottone inferiore
downButton.addEventListener('click', function(){
    if(dispalyImage === posters.length - 1){
        return;
    }
    galleryImages[dispalyImage].classList.remove('active');
    dispalyImage++;
    galleryImages[dispalyImage].classList.add('active');
})