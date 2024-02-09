const students =  {
    name : ' hasan',
    class : 'XII',
    school : 'raghunath Pur high school',
     fun : function karim( studentInfo){
        console.log( 'i am student of better life')
     },
    friend : {
        name : "jihad",
        class : 'seven ',
        school : 'purabari high school',
        age : 19
    },
     car :  ['motor bayek',  'maicru','privet car' ],
}


const products = [
   {
    name : " hasan",
    act : 'bangla heroein'
   },
   {
    name : " hasan",
    act : 'bangla heroein'
   },
   {
    name : " hasan",
    act : 'bangla heroein'
   }
]

function pro(){
    for(const product of products){
        console.log(product)
    }
}
pro()
const products1 = {
       '0' : 123,
       '1': 345,
       '2' : 87,
       '3' : 345

}
 function pro1(num, num2){
         console.log(num , num2)
         console.log(arguments)
 }
 pro1(12,38,45,78,89,23,56,32,12)