'usestrict';
let money = prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');
    let appdata = {
    budget: money,
    timeData: time,
    expenses: {},
optionalexpenses: {},  
 income: [],
 savings: false
    };
let a1 = prompt( "Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt( "Во сколько обойдется?", ''),
    a3 = prompt( "Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt( "Во сколько обойдется?", '');

    appdata.expenses.a1 = a2;
    appdata.expenses.a3 = a4;
    
alert(appdata.budget / 30);
