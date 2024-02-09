const person = [ "rikaib", 'rifat,',  'hasan', 'robin'];
const sortedPerson = person.sort();
console.log(sortedPerson);
// sort -->
const numbers = [ 2, 14, 3, 56, 43 , 12, 20]
/**
 * ascending ---> smaller to large  : [ 2,3 12 , 14. 56]
 * descending ---> large to smaller number : [56, 46 , 12 , 10 ]
 */
const numbers_ace =[... numbers].sort( function(a,b){ return a-b }); //ascending 

const numbers_dce = [...numbers].sort( function(a,b){return b-a}); //descending 
 console.log(numbers_ace)
