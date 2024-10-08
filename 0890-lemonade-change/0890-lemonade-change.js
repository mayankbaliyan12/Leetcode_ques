/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five=0;
    let ten=0;

    for(let i=0;i<bills.length;i++){
        if(bills[i]==5){
            five=five+1;
        }
        else if(bills[i]==10){
            if(five){
                five=five-1;
                ten=ten+1;
            }
            else{
                return false;
            }
        }
        else{
            if(ten && five){
                ten=ten-1;
                five=five-1;
            }
            else if(five>=3){
                five=five-3;
            }
            else{
                return false;
            }
        }
    }
    return true;
};