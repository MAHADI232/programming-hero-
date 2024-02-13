 const calculateRectangleArea = document.getElementById('calculate-rectangle-area');

//  get base value
    calculateRectangleArea.addEventListener('click',(e)=>{
             // rectangle width
      const     rectangleWidthArea = document.getElementById('rectangle-area');
                //console.log(rectangleWidthArea.value)  
                const rectangleWidthText = rectangleWidthArea.value;
                const width = parseFloat(rectangleWidthText);
             // rectangle height
      const     rectangleHeightArea = document.getElementById('rectangle-height') ;
                const rectangleHeightText = rectangleHeightArea.value;
                const height = parseFloat(rectangleHeightText ) 
             // total area
                const Area = width * height ;    
             // console.log('Area Rectangle is :',Area)
             
             // display rectangle area        
      const     rectangleOutput=  document.getElementById('rectangle-output-base');
                rectangleOutput.innerText = Area;            
                
    }) //done