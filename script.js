// let n= prompt("Son kiriting")
// let m = prompt('Kattaroq son kiriting')
// function gerv(a,b) {
// 	for(let i=a;i<=b;i++){
// 		if(i%3==0){
// 		console.log(i);
// 		}
// 	}

// }
// gerv(n,m)

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.

// let won = +prompt('Minut kiriting')
// function toSekunds(min) {
// 	return min * 60
// }
// console.log(toSekunds(won))
// ==============================================================================================================

// Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.

// let int = 5
// function nextInteger(int) {
// 	return int + 1
// }

// console.log(nextInteger(int))
// =========================================================================================================

// Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik) {

// 	return (asos*balandlik)/2

// }
// console.log(uchburchakYuzi(8,3));
// // ==============================================================================================================

// .Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

// function ageToDays(age) {

// 	return age*365
// }

// console.log(ageToDays(65))
// ======================================================================================================================

// .Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.

// function add(kub) {
// 	return Math.pow(kub, 3)
// }

// console.log(add(3))
// ====================================================================================================================

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function power(x,y) {
// return x*y
// }

// console.log(power(230, 10))
// ==============================================================================================================
// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.

// function hourToSekunds(hour) {
// return  hour*3600

// }
// console.log(hourToSekunds(2))
// =====================================================================================================================

// .Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// function uchinchiTomon(tomon1, tomon2) {

// return (tomon1 + tomon2) - 1

// }
// console.log(uchinchiTomon(8, 10))
// ==========================================================================================================================================

// Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

// function qoldiq(son1, son2) {
// return son1%son2
// }
// console.log(qoldiq(10,3));
// ==========================================================================================================================================
// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function turtburchakYuzi(boyi, eni) {
// 	return boyi * eni
// }
// console.log(qoldiq(1, 3))

// =========================================================================================================================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// function stringQoshish(a) {
// 	return 'something ' + a
// }
// console.log(stringQoshish("is better than nothing"));

// =========================================================================================================================================

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(9) ᔍ 81
// kvadrat(100) ᔍ 10000

// function kvadrat(n) {
// 	return n * n
// }
// console.log( kvadrat(5));

// =========================================================================================================================================

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// function noldan(raqam) {
// 	return raqam <= 0
// }
// console.log(noldan(5))
// console.log(noldan(-2));


// =========================================================================================================================================

// .Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

// function ichkiBurchaklar(n) {
// 	return (n - 2) * 180
// }
// console.log(ichkiBurchaklar(3))

// =========================================================================================================================================

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang

// function ochkolar(x, y) {
// 	return x * 2 + y * 3
// }
// console.log(ochkolar(1, 1));

// =========================================================================================================================================

// .Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"
// nameString("Matt") ᔍ "MattEdabit"
// nameString("javaScript") ᔍ "javaScriptEdabit"

function nameString(a) {
	return a + 'Edabit'
}
console.log(nameString("Mubashir") );

// =========================================================================================================================================

// Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang

// function kichik100dan(x, y) {
// 	return x + y < 100
// }
// console.log(kichik100dan(22, 15))

// =========================================================================================================================================

// Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
// 	return tovuq * 2 + qoy * 4 + sigir * 4
// }
// console.log(oyoqlar(2, 3, 5));

// ==========================================================================================================================================
// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// function and(a, b) {
// 	return a && b
// }
// console.log(and(true, false))
