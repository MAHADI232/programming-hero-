

const mobiles = [
  {name : 'samsang' , price :1200, camara : '12mp', color: 'black' },
  {name : 'xomi' , price :1200, camara : '12mp', color: 'black' },
  {name : 'tecno' , price :1200, 'camara' : '12mp', color: 'black' },
  {name : 'vivo' , price :1200, 'camara' : '12mp', color: 'black' },
  {name : 'iphone' , price :1200, 'camara' : '12mp', color: 'black' },
  {name : 'lenovo' , price :1200, 'camara' : '12mp', color: 'black' },
]; 
function getPhones(mobiles){
 let min = mobiles[0];
 for(const mobile of mobiles){
     if( mobile.price < min.price ){
         min = mobile
     }
 }
 return min
}
const getMobile = getPhones(mobiles)
console.log(getMobile.price)
console.log(12)