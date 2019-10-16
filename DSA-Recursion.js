function countSheep(num){
    if(num === 0 ){
        return 'All sheep jumped over the fence';
    }

    console.log(`${num} Another sheep jumps over the fence`);

    return countSheep(num - 1);
}

countSheep(5);

function powerCalculator(b, e){
    if(e < 0){
      return 'exponent should be >= 0'
    }
    
    if(e === 1){
      return b;
    }
  
    return b * powerCalculator(b, e-1);
  }
  
powerCalculator(10, 2)

function reverseString(str){
    if(str.length === 0){
      return '';
    }
  
    lastLetter = str[str.length - 1];
    return lastLetter + reverseString(str.slice(0,str.length -1))
  
  }
  
reverseString('hello');

function triNum(n){
    if(n === 0){
      return 0;
    }
  
    return n + triNum(n - 1)
  }
  
  // n = 4 1 + 2 + 3 + 4 = 10
  
triNum(4);

