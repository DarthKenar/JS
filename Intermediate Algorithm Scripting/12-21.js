function sumFibs(num) {
    let fibo = [0,1]
    let sum = 0
    //generate fibo
    while(fibo[fibo.length-1] <= num){
      let newNum = fibo[fibo.length-2]+fibo[fibo.length-1]
      if(newNum <= num){
        fibo.push(newNum)
      }else{
        break
      };
    };
    //calculate sum
    fibo.map(function (e){
      if(!(e%2==0)){
        sum += e
      };
    });
    //return sum
    return sum
  };
  
  sumFibs(75025);