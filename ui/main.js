var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    counter++;
    var span = document.getElementbyId('count');
    span.innerHTML = counter.toString();
};