'use strict';

{
  document.querySelector('button').addEventListener('click',() => {
    const fizzNum = document.getElementById('FizzNum');
    const buzzNum = document.getElementById('BuzzNum');
    const ul = document.querySelector('ul');
    const fizzValue= Number(fizzNum.value);
    const buzzValue= Number(buzzNum.value);
    const isFizzbuzzInteger = Number.isInteger(fizzValue) !== true || Number.isInteger(buzzValue) !== true;
    const fizzbuzzNull = !fizzValue || !buzzValue ;

    while(ul.lastChild !== null){
      ul.removeChild(ul.lastChild);
    }
    
   if(isFizzbuzzInteger && fizzbuzzNull){
      const li = document.createElement('li');
      li.textContent = `整数値を入力してください` ;
      ul.appendChild(li);
    }else{
    
      for(let i=1; i < 100 ;i++){
        
          const li = document.createElement('li');
          if( i % fizzValue === 0 && i % buzzValue === 0 ){
            li.textContent = `FizzBuzz  ${i}` ;
            ul.appendChild(li);
        
          }else if( i % fizzValue === 0){
            li.textContent = `Fizz  ${i}` ;
            ul.appendChild(li);
  
          }else if( i % buzzValue === 0){
            li.textContent = `Buzz  ${i}` ;
            ul.appendChild(li);
          }
        
      }
    }

  });

}
