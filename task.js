'usestrict';
let money = +prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');
    let appdata = {
    budget: money,
    timeData: time,
    expenses: {},
optionalexpenses: {},  
 income: [],
 savings: false
    };

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
    };
    // Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

    appdata.moneyPerDay = appdata.budget / 30;    

    alert ("Бюджет на 1 день составляет " + appdata.moneyPerDay + "руб.");
   
   
   
    if (appdata.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appdata.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }