 const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });



  let date = new Date();
alert(+date); // кількість мілісекунд, так само, як date.getTime()
// Важливий побічний ефект: дати можуть відніматися, результатом є їх різниця в мілісекундах.
// Це можна використовувати для вимірювання часу:
let start = timer.targetDate; // початок вимірювання часу
// виконується робота
for (let i = 0; i < 100000; i++) {
let doSomething = i * i * i;
}
let end = new Date(); // кінець вимірювання часу
alert( `Цикл зайняв ${end - start} мс` );