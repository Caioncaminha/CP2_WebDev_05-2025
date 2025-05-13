# Checkpoint 2 — WebDev

Este repositório contém a implementação de três desafios propostos para o **Checkpoint 2** da disciplina de Desenvolvimento Web. Os exercícios abordam conceitos importantes como `sessionStorage`, manipulação de tempo, arrays, objetos, lógica condicional e manipulação do DOM com JavaScript.

---

## 🕒 Contador de Tempo de Sessão com Feedback

### Descrição

Página web que inicia a contagem de tempo automaticamente ao ser aberta. O tempo é mostrado em segundos e armazenado no `sessionStorage`, garantindo que, ao recarregar a página, o contador continue de onde parou.

### Funcionalidades

- Contador de tempo em tempo real.
- Armazenamento do tempo decorrido com `sessionStorage`.
- Mensagem de aviso caso o tempo ultrapasse 10 segundos, incentivando a interação do usuário.

### Tecnologias

- HTML
- CSS (mensagem sutil estilizada)
- JavaScript (manipulação de tempo e sessionStorage)

---

## 🧩 Enigma da Sequência Misteriosa

### Descrição

Página interativa que decifra uma sequência numérica com base em três números fornecidos pelo usuário. O algoritmo tenta identificar se a sequência segue uma:

- **Progressão Aritmética**
- **Progressão Geométrica**
- **Padrão Personalizado** (baseado na lógica de Fibonacci)

### Funcionalidades

- Entrada de três números inteiros positivos.
- Identificação automática do padrão da sequência.
- Geração dos próximos cinco termos.
- Exibição do padrão identificado e da sequência completa.

### Regras de Identificação

- **PA**: diferença constante.
- **PG**: razão constante (número inteiro positivo).
- **Personalizado**: qualquer outra lógica, assume soma dos dois anteriores.

### Tecnologias

- HTML
- CSS
- JavaScript (lógica de verificação de padrão e geração da sequência)

---

## 🎨 Lista de Cores com Estilização Dinâmica

### Descrição

Página onde o usuário pode digitar nomes de cores em inglês. Cada nova cor digitada é adicionada ao início de uma lista e, se houver um código hexadecimal correspondente, o item da lista é estilizado com essa cor de fundo.

### Funcionalidades

- Campo de entrada para nome da cor.
- Lista dinâmica de cores exibidas.
- Estilização de fundo com a cor correspondente (caso código hex esteja definido).
- Uso de array de objetos com propriedades `nome` e `codigo`.

### Tecnologias

- HTML
- CSS (estilização dinâmica dos itens)
- JavaScript (manipulação de arrays, objetos e DOM)

---

## 📁 Organização do Projeto

├── contador-tempo/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── sequencia-misteriosa/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── lista-cores/
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md
