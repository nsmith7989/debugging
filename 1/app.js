var counter = document.createElement('div');
document.body.appendChild(counter);

for (var i = 1; i <= 20; i++) {
    setTimeout(function timeoutCb() {
        counter.innerHTML = i;
    }, i * 1000);
}
