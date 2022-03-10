const countDown = () => {
    const site = 'https://www.nike.com/';
    const date = 'Jul 04, 2022'; // format: MMM DD, YYYY
    const endTime = '00:00:00'; // 24-hour | format: HH:MM:SS
    const countDate = new Date(`${date} ${endTime}`).getTime();
    const currentDate = new Date().getTime();
    const dateDiff = countDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(dateDiff / day);
    const textHour = Math.floor((dateDiff % day) / hour);
    const textMinute = Math.floor((dateDiff % hour) / minute);
    const textSecond = Math.floor((dateDiff % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    if (dateDiff <= 60000 && dateDiff > 1000) {
        changeColor();
    } else if (dateDiff < 1000) {
        clearInterval(time);
        window.location.href = `${site}`;
    }
}

const time = setInterval(countDown, 1000);

function changeColor() {
    let day = document.querySelector('.day');
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');

    day.classList.add('red');
    hour.classList.add('red');
    minute.classList.add('red');
    second.classList.add('red');
}