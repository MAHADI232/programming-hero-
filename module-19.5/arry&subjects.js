/**
 * key ass .js
 */
const computer = {
    brand : 'lenovo',
      service : {
                hp : 'hands',
                price: '320000',
                trand : 'genarator'
      },

    price : 35500,
    prossesor : 'internal',
    hdd : '512b',
    monitor : "hp"
}

//  const values = Object.values(computer)
//  const keys = Object.keys(computer);
//  console.log(computer.service.hp)
//  console.log(keys);
//  console.log(values);
//  console.log(computer.brand);
// const  subject = 'tanzila';
//  console.log(subject.toLocaleUpperCase())
//  console.log(subject.toLocaleUpperCase())
//  console.log(subject.toUpperCase())
//  console.log(subject.toString())

const sentence =  ' i am learing web devolment';
console.log(sentence);
let reverse = '';
for(const lettar of sentence){
    reverse = lettar + reverse;
}
for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    console.log(element)
    
}