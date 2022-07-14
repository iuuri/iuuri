// Script efeito maquina de digitar nome
const el = document.querySelector('.meu-nome');
const text = "Iuri Souza";
const interval = 80;

function showText(el, text, interval) {
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if (!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);


}

showText(el, text, interval);



// // Scrip acordeon experiencias
