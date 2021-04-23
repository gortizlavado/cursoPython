"use  strict";
import { photoRenderer } from "/js/renderers/photos.js";
function  main() {
    let  photoContainer = document.querySelector("#photo-details-column");
    let  photo = {
        title: "Camara",
        description: "Mi nueva camara",
        userId: 1,
        url: "https://i.blogs.es/078d49/0f4e0fbb-1c87-41a5-8b90-7cff6e6f8e7c/450_1000.jpeg",
        date: "15/08/2029",
    };
    let  photoDetails = photoRenderer.asDetails(photo);
    photoContainer.appendChild(photoDetails);
}
document.addEventListener("DOMContentLoaded", main);