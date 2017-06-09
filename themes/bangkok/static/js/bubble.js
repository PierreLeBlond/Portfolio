var images = [ "profil.jpg", "travel.jpg", "creative.jpg", "visual.jpg", "game.jpeg" ];
var captions = [ "That's me !", "Travels", "Creative coding", "Visual computing", "Game"];
var position = [ 25, 35, 60, 30, 10, 70, 50, 60, 20, 10 ];
var size = [ 20, 15, 10, 17, 8 ];

var ul = document.getElementById("bubbles");

images.forEach( function(image, index){

    var li = document.createElement("LI");
    li.className = "Bubble";
    ul.appendChild(li);

    var wrapper = document.createElement("DIV");
    wrapper.className = "ratio-wrapper";
    li.appendChild(wrapper);
    li.style.top = position[2*index] + "%";
    li.style.left = position[2*index + 1] + "%";
    li.style.width = size[index] + "%";

    var box = document.createElement("DIV");
    box.className = "ratio-box";
    wrapper.appendChild(box);

    var picture = document.createElement("DIV");
    picture.className = "Bubble-picture full-image round-div aero";
    box.appendChild(picture);
    var path = "url(images/" + images[index] + ")";
    picture.style.backgroundImage = path;

    var caption = document.createElement("DIV");
    caption.className = "Bubble-label title";
    li.appendChild(caption);
    caption.innerHTML = captions[index];

});
