 /**
  * objictive : get base height of a tringle. calculate the area the usuing the provided formola . adn the display the area
  * step -1: get base value.
  * step -2 : added an id in the base input field 
  * step- 3 : use getElementById to access the input field.
  * step -4 : get value from the input the feild  (value is string now).
  * step - 5 : convert the value to a number . use preseFloat .
  * 
  */
 const calculateTriangleArea = document.getElementById('calculate-Triangle-Area')  
  //get base value.
 calculateTriangleArea.addEventListener('click', (e)=>{
  const      tringleBaseInput = document.getElementById('triangle-base')
             const triangleBaseText = tringleBaseInput.value ;
             const base =parseFloat(triangleBaseText);
             //console.log(base) ;
      //triangle height 
  const      tringleHeightInput = document.getElementById('triangle-height')   
             const triangleHeightText = tringleHeightInput.value;
             const heightBase  = parseFloat(triangleHeightText);
            // console.log(heightBase);

        // calculate tringle area
  const     area = 0.5* base * heightBase ;  
                            console.log('area traingle the is :' ,area)
      //display triangle area 
  const     triangleOutputBase = document.getElementById('tringle-output-base');
            triangleOutputBase.innerText = area;

                          
 })//done
 
