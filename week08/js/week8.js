const letter = document.querySelectorAll('#logo path');

for (let i = 0; i < letter.length; i++) {
    console.log(`Letter ${i} is ${letter[i].getTotalLength()}`)
}