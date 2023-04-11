// Tạo các bóng bay bằng JavaScript
var balloonsContainer = document.querySelector('.balloons');

for (var i = 0; i < 5; i++) {
    var balloon = document.createElement('span');
    balloon.className = 'balloon';
    balloon.innerHTML = '🎈';
    balloonsContainer.appendChild(balloon);
}
