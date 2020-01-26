'use strict';
let money = +prompt("Ваш бюджет на месяц?", "20000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "1975-02-16"),
    appData = {
    budget: money, 
    date: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i=0; i<2; i++) {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
        itCost = prompt("Во сколько обойдется?", "");

if ( (typeof(expenseItem))=== 'string' && (typeof(expenseItem)) != null  && (typeof(itCost)) != null 
      && itCost != '' && expenseItem != '' && expenseItem.length < 40 ){
        alert('done');
    appData.expenses[expenseItem] = itCost;
    
}else {
alert('Некорректные данные');
}
};

appData.moneyPerDay = appData.budget/30;
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);

    if(appData.moneyPerDay < 1000){
        alert('Минимальный уровень достатка');
    }
    else if(appData.moneyPerDay  <= 2000){
        alert('Средний уровень достатка');
    }
    else if(appData.moneyPerDay  > 2000){
        alert('Высокий уровень достатка');
    }
    else{
        alert('Что-то пошло не так');
    }