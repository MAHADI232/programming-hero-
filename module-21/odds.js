
 /***
  * function text or array as parameters
  * give the avarage of the odd number in the array
  */
 function oddAverage( numbers){
    const odds = []
for(const number of numbers){
if(number % 2 === 1 ){
odds.push(number)
}

}
console.log(odds)
}
const numbers = [23, 34 ,123, 6788 ,23, ]
const avg = oddAverage(numbers)
console.log(`average of the numbers is `, avg)
