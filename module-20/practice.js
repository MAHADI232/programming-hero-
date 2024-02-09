const numbers =  [12,45,76,86];

for(const number of numbers){
     console.log(number);
}


const products = [
    { id: 1, name : 'tecno phone', price : 23000},
    { id: 1, name : 'vivo Phone', price :12009},
    { id: 1, name : 'laptop', price : 29000},
    { id: 1, name : 'moto phone', price : 3000},
    
]

function mactechedProducts( products, search){
       const matched = [];
      for(const product of products){
      
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
     }
     return matched

}
 const result = mactechedProducts( products, 'phone')
 console.log(result)




















