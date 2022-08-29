const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Ocorre pq está na classe tech que tem uma propriedade no CSS que sobe acaixa em 20px

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


function alteraClasseTech(event) {
    let tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
}
 
firstLi.addEventListener('click', alteraClasseTech);
secondLi.addEventListener('click', alteraClasseTech);
thirdLi.addEventListener('click', alteraClasseTech );

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('input', alteraTexto);

function alteraTexto(event) {
    let tech = document.querySelector('.tech');
    tech.innerText = event.target.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', acessaPagina);

function acessaPagina() {
    window.open('https://tperim.github.io/', '_blank');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', alteraCor);
myWebpage.addEventListener('mouseout', voltaCor);

function alteraCor(event) {
    event.target.style.color = "#2fc18c";
}

function voltaCor(event) {
    event.target.style.color = 'unset';
}


// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);


// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.