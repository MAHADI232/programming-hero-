
function pandaCost(singara, shomocha, jilapi){

    if(typeof singara !== 'number' || typeof shomocha !== 'number' || typeof jilapi !== 'number'){
              return 'please provibe valid integer numbers ';
              
    } else if(singara < 0 ||  shomocha < 0 || jilapi < 0  ){
        return 'all peramiters should be positive numbers'
    }
    else{
        const singaraPrice = 7;
        const shomochaPrice = 10;
        const jilapiPrice = 15;
        const total = (singara * singaraPrice) + (shomocha * shomochaPrice) + (jilapi * jilapiPrice);

        return total;
    }
}
const foodPrice = pandaCost(0,-4,1);
console.log(foodPrice)

function foodOver(apple, banana, mango){

    if(
        typeof apple !== 'number' ||
        typeof banana !== 'number' || 
        typeof mango !==  'number' 
    ){
        return 'all peramiters of the numbers  '
    }
    else if( apple <0 ||banana < 0 || mango < 0 ){
            return ' all notallow 0 point '
    }
    else{
        const applePrice = 30;
        const  bananaPrice = 20;
        const  mangoPrice = 12;
        const total = (mango * mangoPrice) + (apple * applePrice) + (banana * bananaPrice);
        return total ;
    }
    
}
 const foodPerPrice  =  foodOver(0,0,-8);
 
 console.log(foodPerPrice)
