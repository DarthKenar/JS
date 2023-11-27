function checkCashRegister(price, cash, cid) {
  let remainingChange = cash - price;
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1.0],
    ["FIVE", 5.0],
    ["TEN", 10.0],
    ["TWENTY", 20.0],
    ["ONE HUNDRED", 100.0]
  ];
  const change = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
  function recursive(remainingChange, cid, cu, change){
    for(let i=cid.length-1; i>=0; i--){
      if(currencyUnit[i][1]<=remainingChange){
        if(cid[i][1]>0){
          remainingChange -= currencyUnit[i][1].toFixed(2)
          cid[i][1] -= currencyUnit[i][1]
          change[i][1] += currencyUnit[i][1]
          remainingChange = remainingChange.toFixed(2)
          return recursive(remainingChange, cid, cu, change)
        };
      };
    };
    return [remainingChange, change, cid]
  };

  let response = recursive(remainingChange, cid, currencyUnit, change)
  let reduceCID = cid.reduce((accumulator, currentValue)=>accumulator + currentValue[1],0).toFixed(2);
  let reduceCID2 = response[1].reduce((accumulator, currentValue)=>accumulator + currentValue[1],0).toFixed(2);
  let reduceCID3 = response[2].reduce((accumulator, currentValue)=>accumulator + currentValue[1],0).toFixed(2);
  if(response[0] > 0){
    return {status:"INSUFFICIENT_FUNDS",change:[]};
  }else if(reduceCID3 == 0 && response[0] == 0){
    return {
      status: "CLOSED", 
      change: response[1].map(
        function(e){
          if(e[1]>0){
            return [e[0],e[1].toFixed(1)]
          };
          return [e[0],e[1]]
        }
      )};
  }else{
    return {status: "OPEN", change: response[1].reverse().filter((e) => e[1]>0)};
  };
};

var test2 = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(test2);