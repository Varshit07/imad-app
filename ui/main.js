console.log('Loaded!');
//Change the text of main-text div element
var element = document.getElementById('main-text');
element.innerHTML = "This is Varshit via JS!!";
//Move Madi ;)
var image = document.getElementById('madi');
marginLeft = 0;

function moveRight () {
  marginLeft = marginLeft + 3;
  image.style.marginLeft = marginLeft + 'px';
}

image.onclick = function () {
  var interval = setInterval(moveRight, 50); 
};