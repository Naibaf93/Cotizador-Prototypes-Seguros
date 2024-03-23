// Constructories
function seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;   
}

function ui() {}

// Llena las opciones de los años

ui.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Instanciar UI

const UI = new ui();
console.log(UI);

document.addEventListener('DOMContentLoaded', () => {
    UI.llenarOpciones(); // Llena el select con los años
})