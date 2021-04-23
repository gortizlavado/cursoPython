"use  strict";
import { galleryRenderer } from '/js/renderers/gallery.js';
function  main() {
    let  container = document.querySelector("div.container");
    let  photos = [
        {
            title: "Camara",
            description: "Mi nueva camara",
            userId: 1,
            url: "https://i.blogs.es/078d49/0f4e0fbb-1c87-41a5-8b90-7cff6e6f8e7c/450_1000.jpeg",
            date: "15/08/2020",
        },
        {
            title: "Torre Eiffel",
            description: "De vacaciones",
            userId: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
            date: "01/01/2021",
        },
        {
            title: "Bosque",
            description: "Con la naturaleza",
            userId: 3,
            url: "https://ecosistemas.ovacen.com/wp-content/uploads/2018/01/bosque.jpg",
            date: "03/02/2019",
        },
        {
            title: "Azafata",
            description: "Con amigos",
            url: "https://www.turijobs.com/blog/wp-content/uploads/2018/12/curso-auxiliar-vuelo-alicante3-1024x675.png",
            date: "14/08/2019",
        },
        {
            title: "Roma",
            description: "De turismo",
            url: "https://historia.nationalgeographic.com.es/medio/2019/01/18/foro-romano-roma_6a11fe2b.jpg",
            date: "13/08/2019",
        },
        {
            title: "Estanteria",
            description: "Mi nueva casa",
            url: "https://www.mueblesalfafar.es/358-thickbox_default/estanteria-de-diseno-compuesta-por-6-piezas.jpg",
            date: "16/08/2019",
        },
    ];let  gallery = galleryRenderer.asCardGallery(photos);
    container.appendChild(gallery);
}
document.addEventListener("DOMContentLoaded", main);


