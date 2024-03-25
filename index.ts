let fisrtnmae: string = "Hello world"; //Primitive type

let Age: number = 22;

let boolen: boolean = true;

let age1: any = 100; //Dynamic type
age1 = true;
let arr: any = {};

let direction: "Up" | "Down"; //Literla type
direction = "Up";

let person: {
  //Objects
  nmae: string;
  isSingle: boolean;
};

function circle(diam: number): string {
  //Function
  return "Circumf=" + Math.PI * diam;
}

let ids: number[] = []; //Arrays
ids.push(1);

let options: [string, number]; //Tuples
options = ["Up", 10];

let age: number | string; //Union type
age = 12;
age = "12";

interface namecolors {
  name: string;
  color: string;
}
interface sizesobj {
  name: string;
}
interface objsizi {
  title: string;
  sizes: sizesobj[];
}
interface getInfo {
  name: string;
  images: string[];
  price: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subCategory: string;
  brand: string;
  count: number;
  colors: namecolors[];
  units: objsizi;
}
let test: getInfo = {
  name: "Smartfon iPhone 14 Pro 128GB Purple",
  images: [
    "https://images.uzum.uz/ci1g91rltlh4bk4laa30/original.jpg",
    "https://images.uzum.uz/ci1g91r6edfostigj1u0/original.jpg",
    "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/original.jpg",
  ],
  price: "15000000",
  shortDescription:
    "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
  longDescription:
    "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
  category: "64c6de0d4d748db5916c3d30",
  subCategory: "64c8d732b823d24b1c38835a",
  brand: "64ca3c52afa7a02dcbcf49c6",
  count: 10,
  colors: [
    {
      name: "Qora",
      color: "#000",
    },
    {
      name: "Oq",
      color: "#fff",
    },
  ],
  units: {
    title: "Xotira",
    sizes: [
      {
        name: "128GB",
      },
      {
        name: "256GB",
      },
    ],
  },
};
