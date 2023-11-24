function checkCashRegister(price, cash, cid) {
    let totalChange = cash - price;
    let values = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]
    let change = [
  ["PENNY", 0.00],
  ["NICKEL", 0.00],
  ["DIME", 0.0],
  ["QUARTER", 0.0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]
let valueslength = values.length-1
console.log(values[valueslength][1])
    while(totalChange != 0){
      for(let i=0; i<valueslength;i++){
        if(values[valueslength-i][1]<=totalChange){
          if(cid[valueslength-i][1]>0){
            cid[valueslength-i][1] -= values[valueslength-i][1]
            totalChange -= values[valueslength-i][1]
            change[valueslength-i][1] += values[valueslength-i][1]
            break;
          };
        };
        //si esta en la comprobación del ultimo elemento y el valor change no es 0
          //  devolver {status: "INSUFFICIENT_FUNDS", change: []}
      };
    };
    if(cid.filter((e)=>e[1]!=0) == []){
      console.log(cid.filter((e)=>e[1]!=0))
      console.log("si")
      return {status: "CLOSE", change: change}
    }else{
      return {status: "OPEN", change: change}
    }
    
    //mientras el cambio sea diferente de 0 hacer:
        //encontrar el cambio que sea igual o menor al vuelto recorriendo todos los valores posibles de la caja registradora
            //si hay vuelto de ese valor (tipo de moneda) en la caja
                //restarlo de la caja
                //restarlo del vuelto
                //agregarlo a la lista de billetes o modenas utilizadas
    //devolver CLOSE (porque salio del while y el cambio es 0)
        
    return change;
  }

  
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])