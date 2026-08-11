const button = document.getElementById('roll')
const output = document.getElementById('kekka')
const mode = document.getElementById('mode')


let kekka

button.addEventListener('click', () => {
    console.log(mode.checked)
    if (mode.checked) {
        kekka = Math.floor(Math.random() * 1000000000)
        kekka = kekka.toString(36)
        kekka = `You rolled... 1 in 1000000000 ${kekka}`
    } 
    else {
        kekka = Math.floor(Math.random() * 10000000)
        kekka = `You rolled... 1 in 10000000 ${kekka}`
    }
    output.textContent = kekka
});