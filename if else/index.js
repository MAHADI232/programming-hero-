// const numbers = 20;
// const name = true;
// if(6 > numbers){
//     console.log("ami parbo")
    
// }
// else if( 2> numbers){
//     const num = 12;
//     console.log(num)
// }
// else if(name == false){
//  console.log('ami shothik')
// }
//  else  {
//     console.log("ami  beshi parbo na  ");
    

// }



/**
 * *********************************
 *           PRICE
 * **********************************
 * const price = 4000;

if(price>=5000){
    const discont = price *10/100;
    const payAmaunt = price -discont;
    console.log(payAmaunt)
}
else if(price >= 2500){
    const perDiscount = price * 5/100;
    const perPeyamount = price - perDiscount;
    console.log(perPeyamount)

}
else{
    console.log(price)
}

 */
/*const age = 17;

const price = 500;

if(age >= 12){
    console.log('you can food free')
}
else if(age >= 60){
// 50% discount
const discount =price * 50/100;
const ayAmaunt = price-discount;
console.log(ayAmaunt)

}
*/


// const dolar = -10;
// if(dolar > 450){
//     console.log('bro you are rich');
// }
// else{
//     if(dolar > 200){
//         console.log('isnt rich or poor')
//     }else{
//         if(dolar > 0 ){
//             console.log('are you a poor man')
//         }
//     }
// }
/**
 * ***************************************
 *            TeRNARY --> there parts
 * ***************************************
 */
// const age = 17;
// if ( age >= 18 ){
//     console.log("you can vote");

// }
// else{
//     console.log('your vote is note typing ')
// }
const age = 50;
age >= 18 ? console.log('you are vote') : console.log("is not allow your vote");

let price = 2009;
const isLeader = false;
if(isLeader == true){
    if(price > 1000){
        price = price/2;
    }
    else{
        price = 0
    }
}
else{
    price = price + 1000;
}

price =isLeader === true ? price >1000 ? price /2 : 0: price + 1000;
