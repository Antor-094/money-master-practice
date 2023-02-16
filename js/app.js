
function incomeExpenseReturn(e){
    const incomeExValue = document.getElementById(e);
    const incomeExValueMoneyS = incomeExValue.value;
    const incomeExValueMoneyI = parseInt(incomeExValueMoneyS);
   
    return incomeExValueMoneyI;
}


document.getElementById('btn-calculate').addEventListener('click',function(){

   const value1 = incomeExpenseReturn('income-input')
   const value2 = incomeExpenseReturn('food-input')
   const value3 = incomeExpenseReturn('rent-input')
   const value4 = incomeExpenseReturn('cloth-input')
   
    if(isNaN(value1)||isNaN(value2)||isNaN(value3)||isNaN(value4)){
        return alert('Provide a valid input plz!!');
        
         
    }
   if(value1<(value2+value3+value4)){
    

    return alert('Income can not be lower!!');
 }
   const totalExpense = value2+value3+value4;
   const totalExpenseField = document.getElementById('total-expense')
   totalExpenseField.innerText = totalExpense;
   const totalBalance = value1 -totalExpense;
   const totalBalanceField = document.getElementById('balance-rem')
   totalBalanceField.innerText = totalBalance;
})

document.getElementById('btn-save').addEventListener('click',function(){

    const saveInput = incomeExpenseReturn('save-input')
    const value1 = incomeExpenseReturn('income-input')
    const value2 = incomeExpenseReturn('food-input')
    const value3 = incomeExpenseReturn('rent-input')
    const value4 = incomeExpenseReturn('cloth-input')
    if(isNaN(saveInput)){
        alert('provide a number')
        return;
    }
    const totalBalance = value1 -(value2+value3+value4);

    const savePercent = (saveInput/100)*totalBalance;
    const saveInputF = document.getElementById('saving-amount');

    saveInputF.innerText = savePercent;
    const remBalance = totalBalance-savePercent;
    const remBalanceF = document.getElementById('rem-balance')
    remBalanceF.innerText = remBalance;

})