"use strict";

const productUrlList = [
    'bosch-2000', 
    'bosch-3000', 
    'bosch-6000', 
    'bosch-9000',
    'makita-td-110',
];

const productBrandList = [
    'BOSCH', 
    'Makita', 
    'Vagner', 
    'Mega', 
    'Proline', 
];

const productTitleList = [
    'Перфоратор BOSCH BFG 2000',
    'Перфоратор BOSCH BFG 3000',
    'Перфоратор BOSCH BFG 6000',
    'Перфоратор BOSCH BFG 9000',
    'Шуруповерт Makita TD-110',
];

const productCategoryList = [
    'Перфораторы',
    'Шуруповерты',
    'Ключи',
    'Отвертки',
];

const productFlagList = [
    'new',
    'promo',
    '',
];

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const randomUnitFromList = (list) => list[randomInteger(0, list.length - 1)];

const getDiscount = (price) => {
    if (randomInteger(0, 1) === 1) {
        return calcDiscount(price);
    } else {
        return 0;
    }
}

const calcDiscount = (price) => Math.floor((price * 1.15)/500)*500;

const createProductUnit = () => {
    let price = randomInteger(5000, 20000);
    return {
        url : `img/catalog/${randomUnitFromList(productUrlList)}.jpg`,
        brand : randomUnitFromList(productBrandList),
        title : randomUnitFromList(productTitleList),
        price : price,
        category : randomUnitFromList(productCategoryList),
        discount : getDiscount(price),
        flag : randomUnitFromList(productFlagList),
        isElectric : Boolean(randomInteger(0, 1)),
    }
}

const createProductList = (count) => {
    const productList = [];
    for (let i = 0; i < count; i++) {
        productList.push(createProductUnit());
    }
    return productList;
}

const productList = createProductList(18);

console.log(productList);
