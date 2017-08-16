console.log('Loaded!');
//Change the text of main-text div element
var element = document.getElementById('main-text');
element.innerHTML = "This is Varshit via JS!!";
//Move Madi ;)
var image = document.getElementById('madi');
image.onclick = function () {
  image.style.marginLeft = '50px';  
};