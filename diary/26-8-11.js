const button = document.getElementById('roll')
const output = document.getElementById('kekka')


let kekka

button.addEventListener('click', () => {
    kekka = Math.floor(Math.random()*10000000)
    kekka = `You rolled... 1 in 10000000 ${kekka}`
    output.textContent = kekka
});