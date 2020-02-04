'use strict';
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "20000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "1975-02-16");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет?", "20000");
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
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(2);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        }
        else if (appData.moneyPerDay >=100 && appData.moneyPerDay<= 2000){
            console.log('Средний уровень достатка');
        }
        else if (appData.moneyPerDay  > 2000) {
            console.log('Высокий уровень достатка');
        }
        else {
            console.log('Что-то пошло не так');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма вклада", ''),
                percent = +prompt("Каков процент по вкладу", '');

                appData.monthIncome = save/100/12*percent;
                alert("Ваш доход по депозиту в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
           let opt =  prompt("Статья необязательных расходов", "");
           appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt ("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(', ');
        appData.income.push(prompt("Еще дополнительный доход?", ""));
        appData.income.sort();
    }
};




   
