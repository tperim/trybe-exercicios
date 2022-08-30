function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
//   🚀 Exercício 1:
function createDaysOfTheMonth() {
    let decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let holidayList = [24, 25, 31];
    let fridayList = [4, 11, 18, 25];
    let decemberDaysList = document.getElementById('days');

    for (let index = 0; index < decemberDays.length; index += 1) {
        const dayOfMonth = decemberDays[index];
        const dayOfMonthListItem = document.createElement('li');
        dayOfMonthListItem.innerHTML = dayOfMonth;
        dayOfMonthListItem.classList.add('day');

        if (holidayList.includes(dayOfMonth)) {
            dayOfMonthListItem.classList.add('holiday');
        }
        if (fridayList.includes(dayOfMonth)) {
            dayOfMonthListItem.classList.add('friday');
        }
        decemberDaysList.appendChild(dayOfMonthListItem);
    };
};
createDaysOfTheMonth();

//   🚀 Exercício 2:
function criaBotaoFeriados() {
    let botaoFather = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerText = 'Feriados';
    botaoFather.appendChild(botao);
}
criaBotaoFeriados();

//   🚀 Exercício 3:
function mudaCorHoliday() {
    botoes = document.getElementsByClassName('holiday');
    for (let index = 0; index < botoes.length; index += 1) {
        if (botoes[index].style.backgroundColor !== 'rgb(255, 228, 139)') {
            botoes[index].style.backgroundColor = 'rgb(255, 228, 139)';
        } else {
            botoes[index].style.backgroundColor = '';
        };
    }
}
botao = document.getElementById('btn-holiday');
botao.addEventListener('click', mudaCorHoliday);

// 🚀 Exercício 4:
function criaBotaoSexta() {
    let botaoSextaFather = document.querySelector('.buttons-container');
    let botaoSexta = document.createElement('button');
    botaoSexta.id = 'btn-friday';
    botaoSexta.innerText = 'Sexta-feira';
    botaoSextaFather.appendChild(botaoSexta);
}
criaBotaoSexta();

//   🚀 Exercício 5:
function mudaTextoSexta() {
    diasSexta = document.getElementsByClassName('friday');
    for (let index = 0; index < diasSexta.length; index += 1) {
        let texto = diasSexta[index].innerText;
        if (diasSexta[index].innerText.includes('S')) {
            diasSexta[index].innerText = diasSexta[index].innerText.replace(/S/g, "");
        } else {
            diasSexta[index].innerText = 'S ' + diasSexta[index].innerText ;
        };
    }
}
botaoSexta = document.getElementById('btn-friday');
botaoSexta.addEventListener('click', mudaTextoSexta);

// 🚀 Exercício 6: