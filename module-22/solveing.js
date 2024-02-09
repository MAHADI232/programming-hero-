function picnicBudget(perticipents){
    //valetisean part 
    if(typeof perticipents !== 'number' || 
    perticipents < 0 ){
        return ' perticipient is should a valid number '
    }else{
        let first100Cost = 0;
        let second101Cost = 0;
        let remainingCost = 0;
        let totalCost = 0;

            if(perticipents <= 100){
                first100Cost = perticipents * 5000;
                return first100Cost
            }else if( perticipents <=200){
                    first100Cost = 5000* 100;
                    second101Cost = (perticipents-100) * 4000;
                    totalCost = first100Cost + second101Cost; 
                return totalCost      
              }else{
                first100Cost = 5000* 100;
                second101Cost = 4000 * 100;
                remainingCost = (perticipents - 200) * 3000;
                totalCost = first100Cost + second101Cost + remainingCost ;
                return totalCost
              }
      }
}
const tour = picnicBudget(202);
console.log(tour)







function picnicBudget (perPiss){
    // vuletatian peramitirs
    if(typeof perPiss !== 'number' ||
        perPiss < 0 ){
            return ' picnic is not allow '
        }else{
            let first100Cost = 0;
            let second101Cost = 0;
            let remainingCost = 0 ;
            let totalCost = 0;
             
                 if(perPiss <= 100){
                        first100Cost = perPiss* 5000;
                        return first100Cost
                 }else if(perPiss <= 200){
                        first100Cost = 100*5000;
                        second101Cost = (perPiss -100) * 4000;
                        totalCost = first100Cost + second101Cost 
                        return totalCost
                 }else{
                    first100Cost = 100*5000;
                    second101Cost = 100 * 4000;
                    remainingCost = (perPiss- 200) * 200;
                    totalCost = first100Cost + second101Cost + remainingCost;
                    return totalCost
                 }
        }
}
const all= picnicBudget(301);
console.log(all)