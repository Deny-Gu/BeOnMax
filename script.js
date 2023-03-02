let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money === '' || money === null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = prompt('Во сколько обойдется?', '');
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        } 
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка')
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.saving === true) {
            let save = +prompt('Какова сумма накомплений?');
                percent = +prompt('Под какой процент?');
        
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
          }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            appData.optionalExpenses[i] = prompt('Статья необязательных расходов?', '');
        } 
    },
    chooseIncome: function () {
        let items = prompt('Что принесет допольнительный доход? (Перечислите через запятую)', '');

        if (!isNaN(items) || items === '' || items === null) {
            console.log('Вы ввели некоректные данные или остаивили строку пустой.')
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort(); 
        }
        // while (!isNaN(items) || items === '' || items === null) {
        //    items = prompt('Что принесет допольнительный доход? (Перечислите через запятую)', '');
        //    appData.income = items.split(', ');
        //    appData.income.push(prompt('Может что-то еще?'));
        //    appData.income.sort();
        // }

        appData.income.forEach((item, i) => {
            if (i >= 1) {
                alert('Способы доп. заработка: ' + i + ': ' + item);
            }
        },);

    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}