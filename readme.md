# Primative types

TypeScriptda "primitive types" oddiy tur deb ataladi va ular asosiy ma'lumotlar turlarini ifodalaydi. Oddiy turlar quyidagilardir:

number : Sonlar (int, float)
string : Matnlar
boolean : Mantiqiy qiymatlar (true yoki false )
null : Bo'shlik
undefined : Aniqlik mahsuloti
symbol : Unikal (unique ) qiymatlar
Oddiy turlar TypeScriptda qiymatlarga mos ravishda foydalaniladi va ularga mos funksiyalarni ishlab chiqishda keng qo'llaniladi. Misol uchun:

```typescript
let age: number = 25;
let name: string = "Alice";
let isAdult: boolean = true;
let nothing: null = null;
let data: undefined = undefined;
let uniqueId: symbol = Symbol("uniqueId");
```

Oddiy turdagi qiymatlar o'zgaruvchanlar (variables) orqali ifodalangan va ularga mos ravishda amal qilib yozishga imkon beradi. Oddiy turlar TypeScriptni to'g'ridan-to'g'ri JavaScriptga compile qilishda muhim rol o'ynaydi.

# Functions

TypeScriptda funktsiyalar JavaScriptga o'xshash ravishda yaratiladi, lekin TypeScriptda funksiyalarga qulayliklar qo'shiladi va ularga tip berish mumkin.

Funktsiyalar TypeScriptda quyidagicha yaratiladi:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8
```

Bu misolda add nomli funktsiya yaratilgan, u ikkita son qabul qiladi va ularni qo'shadi. Funksiyada parametrlarga ma'lumot turi berilgan (number ), va funksiya qiymat qaytaradi (number ). Ushbu turlar TypeScript compilerga to'g'ri ma'lumotlar turini va qaytariladigan qiymat turlarini tekshirish imkonini beradi.

Funksiyalarni TypeScriptda quyidagi usullarda yaratish mumkin:

Express funksiyalar:

```typescript
let add = function (a: number, b: number): number {
  return a + b;
};
```

Arrow funksiyalar:

```typescript
let add = (a: number, b: number): number => {
  return a + b;
};
```

Funksiyalar TypeScriptda yana foydalaniladigan qulayliklar, masalan, funksiya parametrlarining default qiymatlari, optional parametrlar, rest parametrlar va boshqa yordamchilar bilan ishlovchi va xato qidiruvni avtomatik ravishda aniqlab olingan funksiyalar yaratish imkonini beradi.

# UNION , LITERAL , TUPLES

UNION
Union TypeScriptda ikki yoki undan ko'pchilik tur (type)ni ifodalovchi qulaylikdir. Shuningdek, bir nechta turdan birorini qabul qilish uchun ham foydalaniladi. Misol uchun, quyidagi kosningiz uchun agarikki funktsiya yozamiz:

```typescript
function printId(id: number | string) {
console.log(id);
}

printId(101); // 101
printId("ABC"); // ABC
LITERAL
Literal TypeScriptda bir qiymatni ayirmoq va belgilamoq uchun ishlatiladi. Misol uchun, bir detallarni turini aytish uchun foydalaniladi:

let status: "active" | "inactive";
status = "active"; //To'g'ri
status = "pending"; //Xato, "pending" qiymati xato

function setStatus(status: "open" | "closed") {
// Funktsiyada qabul qilish qaror
}
```

TUPLES
Tuple TypeScriptda fikrlarni qayta qaytishi kerak bo'lgan ma'lumotlar to'plami bo'lishi kerak bo'lgan joylar uchun ishlatiladi. Misol uchun, quyidagi:

let userInfo: [number, string];
userInfo = [1, "John"];
Bu misolda, userInfo uchun tur bilan number va string turdagi qiymatlar toplaminidir. Tuple'larning o'lchovlari sababi bilan tasavvur qilingan tartibda uzatilishi kerak.

# TYPE OBJECT , ARRAY

OBJECT
TypeScriptda object tipi, xususiyatlari (properties) va ularning mos qiymatlari (values) bo'yicha boshqa obyektning asosiy konteyner turini ifodalovchi umumiy maqola tipidir. Obyektning turi bilan zarur bo'lgan xususiyatlar haqida ma'lumotlar berish uchun ushbu turdan foydalaniladi. Misol uchun:

```typescript
let person: {
name: string,
age: number
};

person = { name: "Alice", age: 30 }; // To'g'ri
person = { name: "Bob" }; // Xato, person obyektida age xususiyati kerak
ARRAY
Array TypeScriptda massivni ifodalovchi turdir. Massiv xilma-xil ma'lumotlarning ro'yhatini saqlaydi. Massivda tur berish majburiy emas, ammo ko'rsatib berish tavsiya etiladi. Misol uchun:

let numbers: number[] = [1, 2, 3, 4, 5]; // To'g'ri

let fruits: Array<string> = ["Apple", "Banana", "Cherry"]; // To'g'ri
```

Massivlar uzunliklarini bilib olishy uchun length xususiyati va massivdagi elementlarga murojat qilish uchun indekslar ishlatiladi:

console.log(numbers.length); // 5
console.log(fruits[1]); // Banana
Bu TypeScriptda obyekt va massivlar uchun eng mashhur tur tushunchalardir. Yangi obyektlar va massivlar yaratishning bir qancha yo'nalishlari mavjud, shuningdek turdagi xususiyatlarni (properties ) yoki massivdagi elementlarni (elements ) ma'lum bir tartibda korish uchun indeks ishlatilishi ustuvor.

# INTERFACE

TypeScriptda interface , obyektlar, klasslar, massivlar yoki funktsiyalarning turini aniq vaqtinchalik ma’lum etish uchun foydalaniladigan turdir. interface bilan TypeScriptga obyektlarning xususiyatlari va ularning qiymatlari qanday ko'rinishda ekanligi aytish mumkin. Misol uchun:

```typescript
interface Person {
  name: string;
  age: number;
  greet: () => void;
}

let user: Person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
```

user.greet(); // Console ga "Hello, my name is Alice" chiqadi
interface yordamida obyektlar uchun tur belgilash, obyektning qanday ko'rinishda ekanligi haqida ma'lumot berish va kodni tozalash uchun yordamchi xizmat ko'rsatadi. Ushbu qisqacha misolda, Person interfeysi obyekt xususiyatlari va bir metodni belgilaydi. user obyekti esa ushbu interfeysni amalga oshiradi va uni ishlatib ko'rsatadi.

interface lar TypeScriptda kodni qulaylashtirish uchun juda foydali bo'lib, obyektlar va turli qismlar arasida mantiqiy bog'lanishni ta’minlash imkonini beradi. Obyekt yaratilishida uning mos keladigan interface ini belgilab, kodni tozalash, optimallashtirish va dasturni aniqligini oshirish imkonini beradi.

```

```
