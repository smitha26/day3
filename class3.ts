// let products = [
//     { name: 'Cheese', price: 7.00 },
//     { name: 'Milk', price: 3.00 },
//     { name: 'Wine', price: 97.30 },
//     { name: 'Grapes', price: 4.00 }
// ];
//
// let expensiveProducts = products.filter(product => product.price > 5.00);
//
// console.log(expensiveProducts); // writes [Cheese, Wines]
//let total = product.reduce((memo, currentValue)=> memo + currentvalue.price, 0);
//let total = products.reduce((memo, currentValue) => memo + currentValue.price, 0);

 //let total = products.reduce((memo, currentValue)=> {
//  let subTotal = (memo + currentValue.price);
////  console.log(subTotal);
//  return(subTotal);
//});
//Math function
//function getRandom(){
//  console.log(Math.random())
//  return Math.random();

//}
//getRandom();

//function getRandomLessthan(max){
//  Let result = (Math.random() * max);
//  console.log(result);
////    return result;
//}
//getRandomLessthan(33);

// function getRandomBetween(min: number, max: number){
//     let result = Math.random() * (max - min) + min;
//     console.log(result);
//     return result;
// }
// getRandomBetween(32, 33);
//
// //Math.floor
// function roundDown(num:number){
//   let result = Math.floor(num)
//   console.log(result);
//   return result;
// }
// roundDown(getRandomBetween(19,25));


// let inputField = <HTMLInputElement>document.getElementById("name");
// let myName = inputField.value;
// console.log(myName);


class Product {
    name: string;
    price: number;
    calculateTax() {
        return this.price * .08;
    }
}


let product1 = new Product();
product1.name = 'Eggs';
product1.price = 2.33;
console.log(product1.calculateTax());
