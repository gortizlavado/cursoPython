"use  strict";
import { parseHTML } from "/js/utils/parseHTML.js";
const  photoRenderer = {
    asCard:  function(photo) {
        let  html =`<div  class="col-md-4">
                    <div  class="card">
                    <a href="photo_detail.html">
                    <img src="${photo.url }"  class="card-img-top">
                    </a>
                    </div>
                    </div>
                    </div>`;
        let  card = parseHTML(html);
        return  card;
    },
    asDetails:  function (photo) {
        let  html =`<div  class="photo-details">
                    <h3>${photo.title}</h3>
                    <h6>${photo.description}</h6>
                    <p>Uploaded  by <a href="user_profile.html" class="user-link">
                    User ${photo.userId}</a> on ${photo.date}</p>
                    <hr>
                    <img src="${photo.url }"  class="img-fluid">
                    </div>`;
        let  photoDetails = parseHTML(html);
        return  photoDetails;
    },
};
export { photoRenderer  };