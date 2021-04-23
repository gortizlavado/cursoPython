"use  strict";
import { galleryRenderer } from '/js/renderers/gallery.js';
function  main() {
    let  container = document.querySelector("div.container");
    let  photos = [
        {
            title: "Monte Helado",
            description: "Con frio.",
            userId: 7,
            url: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
            date: "11/08/2020",
        },
        {
            title: "Playa",
            description: "Disfrutando de la tranquilidad",
            userId: 9,
            url: "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
            date: "03/01/2021",
        },
        {
            title: "Bosque",
            description: "Por el rio",
            userId: 6,
            url: "https://la.network/wp-content/uploads/2018/07/BOSQUE-HERMOSO.jpg",
            date: "03/05/2019",
        },
        {
            title: "Rivera",
            description: "Por la rivera del pueblo",
            url: "https://1.bp.blogspot.com/-JREhSKN8sMM/VmH2B-jmFXI/AAAAAAAAIzg/ScNtA185M88/s1600/02273%2Bpaisajes01.jpg",
            date: "14/07/2019",
        },
        {
            title: "Animales",
            description: "La naturaleza en libertad",
            url: "https://assets.afcdn.com/story/20161228/1025805_w944h530c1cx450cy250.jpg",
            date: "14/01/2019",
        },
        {
            title: "Playa",
            description: "Entre rocas, la playa",
            url: "https://cronicaglobal.elespanol.com/uploads/s1/36/29/99/6/paisaje-bonito-playa-de-las-catedrales-lugo.png",
            date: "14/03/2019",
        },
    ];let  gallery = galleryRenderer.asCardGallery(photos);
    container.appendChild(gallery);
}
document.addEventListener("DOMContentLoaded", main);


