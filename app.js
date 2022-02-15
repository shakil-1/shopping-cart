function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update  total 
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}



function getInputbalue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputbalue('phone') * 1219;
    const caseTotal = getInputbalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const text = subTotal / 10;
    const totalPrice = subTotal + text;


    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('text-amount').innerText = text;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone case increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1229, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1229, false);
})
// handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case',59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
   updateProductNumber('case',59, false);
})



