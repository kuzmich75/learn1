'use strict';
let money = prompt("Ваш бюджет на месяц?", "20000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "1975-02-16"),
    appData = {
    budget: money, 
    date: time, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
let stat1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    number1 = prompt("Во сколько обойдется?", ""),
    stat2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    number2 = prompt("Во сколько обойдется", "");
    appData.expenses.stat1 = number1;
    appData.expenses.stat2 = number2;
alert(appData.budget/30);
