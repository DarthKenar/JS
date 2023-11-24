function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    //mientras el cambio sea diferente de 0 hacer:
        //encontrar el cambio que sea igual o menor al vuelto.
            //si hay vuelto de ese valor (tipo de moneda) en la caja
                //restarlo de la caja
                //restarlo del vuelto
    //devolver CLOSE (porque salio del while y el cambio es 0)
        
    return change;
  }

  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);