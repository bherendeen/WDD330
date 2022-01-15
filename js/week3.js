const screenClicks = document.querySelector('body');
const btn = document.querySelector('button');
const moveArea = document.querySelector('div:last-child');

btn.addEventListener('mouseover', function () {
    const height = Math.floor(Math.random() * (moveArea.clientHeight - btn.clientHeight));
    const width = Math.floor(Math.random() * (moveArea.clientWidth - btn.clientWidth));

    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;

});

btn.addEventListener('click', function () {
    btn.innerText = "YOU GOT ME!";
    document.body.style.backgroundColor = 'rgb(136, 197, 89)';
});

let clicks = 0;
screenClicks.addEventListener('mousedown', function () {
    clicks += 1;
    if (clicks >= 30) {
        document.querySelector('p').innerText = `Hint: To catch the button, try resizing the browser window to be smaller.`;
        document.querySelector('p').style.color = 'rgb(209, 160, 0)';
    }
});