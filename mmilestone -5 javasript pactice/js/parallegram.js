console.log(
'hello  i am okay'
)
const parallelogramBtn = document.getElementById('parallelogram-btn');
     parallelogramBtn.addEventListener('click', (event)=>{
            //get base value
    const       parallelogramInputBase = document.getElementById('parallelogram-base-input');
                const parallelogramInputText = parallelogramInputBase.value;
                const base = parseFloat(parallelogramInputText) ;
                
            //parallalegram height
    const        parallalegramHeightInput = document.getElementById('parallelogram-height')  ;
                 const parallalegramHeightText = parallalegramHeightInput.value;
                 const heightBase = parseFloat(parallalegramHeightText);
            //calculate area
                const Area = base * heightBase;
          // display area 
    const      parallelogramOutput = document.getElementById('parallaleogram-output');
               parallelogramOutput.innerText = Area; 
            
              
        
                  
     })