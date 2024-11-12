//1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// let name = prompt("Vvedite vashe imya:");
// alert("Privet " + name + "!");
//2.Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// const currentYear = 2024;
// let birthYear = prompt("Vvedite vash god rojdeniye");
// let age = currentYear - birthYear;
// alert("Vam " + age + " let");
//3.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// let length = prompt("Vvedite dlinu storoni kvadrata: ");
// let perimeter = length * 4;
// alert("Perimetr  kvadrata = " + perimeter);
//4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// let radius = prompt("Vvedite radius okrujnosti: ");
// let square = radius ** 2 * 3.14;
// alert("Plowady  okrujnosti = " + square);
//5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// let distance = prompt("Vvedite rasstoyaniye v km mejdu gorodami:");
// let time = prompt("Za skolko casov vi xotite dobratsa:");
// let speed = distance / time;
// alert("Vam nujno dvigatsya so skorostyu " + speed + " km/h, ctobi uspety voremya.");
//6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
// const exchangeRate = 0.92;
// let dollars = prompt("Vvedite summu v dollarax:");
// let euros = dollars * exchangeRate;
// alert(dollars + " dollarov= " + euros + " evro.");
//7.Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
// let flashDriveGB = prompt("vvedite obyem flewki v GB:");
// let flashDriveMB = flashDriveGB * 1024;
// let fileSizeMB = 820;
// let fileCount = Math.floor(flashDriveMB / fileSizeMB);
// alert("Na flewku pomestitsa " + fileCount + " faylov.");
//8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
// let walletAmount = prompt("Vvedite summu deneg v kowelke:");
// let chocolatePrice = prompt("Vvedite cenu odnoy wokoladki:");
// let chocolateCount = Math.floor(walletAmount / chocolatePrice);
// let change = walletAmount % chocolatePrice;
// alert("Vi mojete kupity " + chocolateCount + " wokoladok, i u vas ostayotsa " + change + " sdaci.");
//9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
// let number = prompt("vvedite trexznacnoe cislo:");
// let reversedNumber =(number % 10) * 100 + Math.floor((number % 100) / 10) * 10 + Math.floor(number / 100);
// alert("Cislo zadom na pered: " + reversedNumber);
//10.Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch.
// let num = prompt("Vvedite celoe cislo:");
// let result = num % 2 === 0 ? "Cislo cetnoye" : "Cislo necetnoye";
// alert(result);
