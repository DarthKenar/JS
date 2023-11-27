function checkCashRegister(price, cash, cid) {
  let remainingChange = cash - price;
  const currencyUnit = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];
  const change = [
  ["PENNY", 0.00],
  ["NICKEL", 0.00],
  ["DIME", 0.0],
  ["QUARTER", 0.0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];
  function recursive(remainingChange, cid, cu, change){
    for(let i=cid.length-1; i>0; i--){
      if(currencyUnit[i][1]<=remainingChange){
        if(cid[i][1]>0){
          remainingChange -= currencyUnit[i][1]
          cid[i][1] -= currencyUnit[i][1]
          change[i][1] += currencyUnit[i][1]
          return recursive(remainingChange, cid, cu, change)
        };
      };
    };
    return [remainingChange, change]
  };

  let response = recursive(remainingChange, cid, currencyUnit, change)

  let reduceCID = cid.reduce((accumulator, currentValue)=>accumulator + currentValue[1])
  if(reduceCID > response[0]){
    return {status:"INSUFFICIENT_FUNDS",change:[]}
  }else if(reduceCID == 0 && remainingChange == 0){
    return {status: "CLOSED", change: response[1]}
  }else{
    return {status: "OPEN", change: response[1].reverse().filter((e) => e[1]>0)}
  };
}

var test = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test)
