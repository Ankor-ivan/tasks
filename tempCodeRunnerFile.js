'usestrict';
let money, time;
function start(){
 money = +prompt('Ваш бюджет на месяц?','');
 time = prompt('Введите дату в формате YYYY-MM-DD','');
 while(isNaN(money) || money == "" || money == null){
    money = +prompt('Ваш бюджет на месяц?','');
 }
}
start();

let appdata = {
    budget: money,
    timeData: time,
    expenses: {},
 optionalexpenses: {},  
 income: [],
 savings: true,
 chooseExpenses: function() {
    for  ( let i = 0; i < 2; i++) {
      let a = prompt( "Введите обязательную статью расходов в этом месяце", ''),
        b = prompt( "Во сколько обойдется?", '');

       
        if (typeof(a)=== 'string' && typeof(a) != null && typeof(b) != null && (a) !="" && (b) !="" && a.length<50) {

         console.log ("done");

         appdata.expenses[a] = b;
        } else {
           console.log ("плохой результат");
           i--;

        }
    }
 },
    detectDayBudget: function() {
      appdata.moneyPerDay = (appdata.budget / 30).toFixed();    
      alert ("Бюджет на 1 день составляет " + appdata.moneyPerDay + "руб.");   
    },
    detectLevel: function() {
        if (appdata.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appdata.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        } 
    },
    chekSavings: function() {
        if (appdata.savings == true) {
            let save = +prompt("Какова сумма накоплений?");
             percent = +prompt("Под какой процент?");
            appdata.monhtIncome = save/100/12*percent;
            alert("Доход с Вашего депозита: " + appdata.monhtIncome );
        }  
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <=3; i++){
            let questionOptExpenses = prompt('Статья необязательных расходов?');
            appdata.optionalexpenses[i] = questionOptExpenses;
            console.log(appdata.optionalexpenses);
   
        } 
    },
    chooseIncome: function() {
 let items = prompt('Что пренесет дополнительный доход? (Перечислите через запятую)', '');
 if(typeof(items) !="string" || items == "" || typeof(items) == null){
     console.log("Вы ввели неккоректные данные или не ввели их вовсе");
    } else{
 appdata.income = items.split(', ');
 appdata.income.push(prompt('Может что то еще?'));
 appdata.income.sort();
    }
    appdata.income.forEach (function(itemmassive, i){
        alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
    });
}
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}