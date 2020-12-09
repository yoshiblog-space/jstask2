'use strict';

{
  document.querySelector('button').addEventListener('click',() => {
    const FN = document.getElementById('FizzNum');
    const BN = document.getElementById('BuzzNum');
    const ul = document.querySelector('ul');
    const Fnum= Number(FN.value);
    const Bnum= Number(BN.value);
    
    
    if(Number.isInteger(Fnum) !== true || Number.isInteger(Bnum) !== true){
      const li = document.createElement('li');
      li.textContent = `整数値を入力してください` ;
      ul.appendChild(li);

    }else if(!Fnum || !Bnum){
      const li = document.createElement('li');
      li.textContent = `整数値を入力してください` ;
      ul.appendChild(li);

    }else{
    
      for(let i=1; i < 100 ;i++){
        const li = document.createElement('li');
        if( i % FN.value === 0 && i % BN.value === 0 ){
          li.textContent = `FizzBuzz  ${i}` ;
          ul.appendChild(li);
        
        }else if( i % FN.value === 0){
          li.textContent = `Fizz  ${i}` ;
          ul.appendChild(li);
  
        }else if( i % BN.value === 0){
          li.textContent = `Buzz  ${i}` ;
          ul.appendChild(li);
        }
        
      }
    }

  });

}
