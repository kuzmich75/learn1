'use strict';
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "20000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "1975-02-16");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "20000");
    }
}
start();

   let appData = {
    budget: money, 
    date: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses(){
    for (let i=0; i<2; i++) {
        let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
            itCost = +prompt("Во сколько обойдется?", "");
    
    if ( (typeof(expenseItem))=== 'string' && (typeof(expenseItem)) != null  && (typeof(itCost)) != null
     && itCost != '' && expenseItem != '' && expenseItem.length < 40 ) {
            alert('done');
            console.log("done");
        appData.expenses[expenseItem] = itCost;
        
    }else {
    alert('Некорректные данные');
    i = i - 1;
        }
    }
}

chooseExpenses();


appData.moneyPerDay = (appData.budget/30).toFixed(2);
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

    function checkSavings(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма вклада"),
                percent = +prompt("Каков процент по вкладу");

                appData.monthIncome = save/100/12*percent;
                alert("Ваш доход по депозиту в месяц: " +appData.monthIncome);
        }
    }
    checkSavings();  