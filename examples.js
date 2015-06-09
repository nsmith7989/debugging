var counter = document.createElement('div');
document.body.appendChild(counter);

for (var i =1 ; i <= 5; i++) {
    setTimeout(function() {
        counter.innerHTML = i;
    }, i * 1000);
}
