const cores = [];

// Dicionário de cores com seus códigos hexadecimais
const coresConhecidas = {
    red: "#FF0000",
    blue: "#0000FF",
    green: "#008000",
    yellow: "#FFFF00",
    orange: "#FFA500",
    purple: "#800080",
    pink: "#FFC0CB",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    brown: "#A52A2A",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    gold: "#FFD700"
};

const colorInput = document.getElementById('colorInput');
const colorDropdown = document.getElementById('colorDropdown');

// Criar e preencher a lista de cores
function createColorList() {
    colorDropdown.innerHTML = '';
    Object.keys(coresConhecidas).forEach(cor => {
        const option = document.createElement('div');
        option.className = 'color-option';
        option.textContent = cor;
        option.style.backgroundColor = coresConhecidas[cor];
        option.style.color = ['#FFFFFF', '#FFFF00'].includes(coresConhecidas[cor].toUpperCase()) ? '#000' : '#FFF';
        option.onclick = () => {
            colorInput.value = cor;
            colorDropdown.style.display = 'none';
        };
        colorDropdown.appendChild(option);
    });
}

// Mostrar/esconder a lista ao clicar no input
colorInput.addEventListener('click', (e) => {
    e.stopPropagation();
    createColorList();
    colorDropdown.style.display = 'block';
});

// Fechar a lista ao clicar fora
document.addEventListener('click', (e) => {
    if (!colorInput.contains(e.target)) {
        colorDropdown.style.display = 'none';
    }
});

function addColor() {
    const input = document.getElementById("colorInput");
    const nomeCor = input.value.trim().toLowerCase();

    // Verifica se a cor existe no dicionário de cores conhecidas
    if (!coresConhecidas.hasOwnProperty(nomeCor)) {
        alert('Por favor, selecione uma cor da lista');
        input.value = "";
        return;
    }

    const codigoHex = coresConhecidas[nomeCor];
    cores.unshift({ nome: nomeCor, codigo: codigoHex });
    renderizarLista();
    input.value = "";
}

// Atualiza o evento de clique no input
colorInput.addEventListener('click', (e) => {
    e.stopPropagation();
    createColorList();
    colorDropdown.style.display = 'block';
});

function renderizarLista() {
    const lista = document.getElementById("colorList");
    lista.innerHTML = "";

    cores.forEach(cor => {
        const item = document.createElement("li");
        item.textContent = cor.nome;

        if (cor.codigo) {
            item.style.backgroundColor = cor.codigo;
            if (cor.codigo.toUpperCase() === "#FFFFFF" || cor.codigo === "#FFFF00") {
                item.style.color = "#000";
            }
        } else {
            item.classList.add("default");
        }

        lista.appendChild(item);
    });
}